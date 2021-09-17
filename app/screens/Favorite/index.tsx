import { useIsFocused } from '@react-navigation/core';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React, { useEffect } from 'react';
import { Alert, BackHandler, View } from 'react-native';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as appActions from 'store/actions/appActions';
import NetworkUtils from 'utils/networkUtils';
import Container from './screen/Container';
//importing components
import Shimmer from './screen/Shimmer';
//importing card component
import { useStyles } from './styles';
const base_url = 'https://ebook-application.herokuapp.com/v1/';

interface IAppReducer {
    loginReducer: ILoginState;
    appReducer: IBookState;
}
const Favorite: React.FC = () => {
    //theme handling
    const styles = useStyles();
    const isFocused = useIsFocused();
    const favoriteBooks = useSelector((state: IAppReducer) => state.appReducer.favorite);
    const isLoading = useSelector((state: IAppReducer) => state.appReducer.isFetching);
    //const [favoriteBookss, setFavoriteBookss] = useState(favoriteBooks);
    const dispatch = useDispatch();

    //fetching favorite books
    const getFavoriteBooks = async () => {
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if (isConnected) {
            dispatch(appActions.IFetchFavoriteBooksRequest());
        } else {
            Toast.show('You are offline', Toast.SHORT);
        }
    };
    useEffect(() => {
        getFavoriteBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]);
    //handling back hardware button
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Book App', 'Are you sure you want to exit?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    return (
        <View>
            {isLoading ? (
                <Shimmer />
            ) : (
                <View style={styles.containerView}>
                    <Container
                        base_url={base_url}
                        books={favoriteBooks}
                        onRefresh={getFavoriteBooks}
                    />
                </View>
            )}
        </View>
    );
};

export default Favorite;
