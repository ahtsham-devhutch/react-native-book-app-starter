import { useIsFocused } from '@react-navigation/core';
import { IBookState } from 'models/reducers/fetchBooks';
import { ILoginState } from 'models/reducers/login';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import getBookDetail from 'services/fetchBookDetail';
//importing components
import Container from './screen/Container';
import Shimmer from './screen/Shimmer';
const base_url = 'https://ebook-application.herokuapp.com/v1/';
import Toast from 'react-native-simple-toast';

interface IState {
    route: {
        params: string;
    };
}
interface IStateReducer {
    appReducer: IBookState;
    loginReducer: ILoginState;
}
interface IData {
    id: number;
    averageRating: number;
    title: string;
    numberOfPages: string | number;
    shortSummary: string;
    createdAt: string;
}
const BookDetail: React.FC<IState> = (props) => {
    const dispatch = useDispatch();
    const bookId = props.route.params; //getting routed params
    const [bookData, setBookData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const isFocussed = useIsFocused();

    //handling back hardware button
    useEffect(() => {
        setIsLoading(true);
        try {
            getBookDetail(parseInt(bookId, 10)).then((response) => {
                setBookData(response.result);
                setIsLoading(false);
            });
        } catch {
            Toast.show('Error occured', Toast.SHORT);
        }

        //using saga
        // const getDetail = async () => {
        //     dispatch(appActions.getBookDetailRequest(parseInt(bookId, 10)));
        // };

        // getDetail();
    }, [bookId, dispatch, isFocussed]);

    return (
        <View>
            {isLoading || bookData === undefined || bookData === null ? (
                <Shimmer />
            ) : (
                <Container base_url={base_url} books={bookData} />
            )}
        </View>
    );
};

export default BookDetail;
