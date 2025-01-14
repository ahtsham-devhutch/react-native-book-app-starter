import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import {
    heightPercentageToDP,
    heightPercentageToDP as hp,
    widthPercentageToDP,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const useStyles = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            flexGrow: 1,
        },
        displayPicture: {
            height: heightPercentageToDP('15%'),
            width: widthPercentageToDP('30%'),
            marginVertical: 20,
            borderRadius: 40,
            backgroundColor: 'transparent',
        },
        horizontalRuler: {
            borderBottomWidth: 2,
            marginTop: 3,
            color: 'gray',
            borderBottomColor: 'red',
        },
        mainHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
            fontSize: 25,
        },
        subHeading: {
            fontWeight: 'bold',
            color: theme.colors.text,
        },
        inputField: {
            width: wp('50%'),
            height: hp('5%'),
            color: theme.colors.text,
        },
        infoView: {
            marginTop: 5,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: theme.colors.text,
            borderRadius: 20,
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: 5,
            width: wp('80%'),
            height: 50,
        },
        infoInputView: {
            marginTop: 5,
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: 5,
            width: wp('80%'),
            height: 50,
        },
        editView: {
            backgroundColor: '#E6E6FA',
            alignContent: 'center',
            alignSelf: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 20,
            borderRadius: 20,
            alignItems: 'center',
            textAlign: 'center',
            color: theme.colors.text,
            padding: 10,
            marginBottom: 10,
        },
        editButton: {
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: 5,
        },
    });
    return styles;
};
