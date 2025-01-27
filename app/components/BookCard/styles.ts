import { StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 45,
        paddingHorizontal: 30,
        backgroundColor: 'white',
    },
    name: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        fontFamily: 'Avenir-Medium',
        alignItems: 'center',
    },
    tagLine: {
        fontSize: hp('2%'),
        fontFamily: 'Avenir-Medium',
        alignItems: 'center',
    },
    listCaption: {
        marginTop: 15,
        fontSize: hp('2%'),
        fontFamily: 'Avenir-Medium',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#61e3a5',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    horizontalRuler: {
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        marginTop: 30,
    },
    flatList: {
        flexGrow: 0,
        marginTop: 10,
    },

    books: {
        height: hp('2%'),
        width: wp('1%'),
        borderRadius: 4,
    },

    bookTrending: {
        height: hp('25%'),
        width: wp('37%'),
        borderRadius: 15,
    },

    bookGeneral: {
        height: hp('20%'),
        width: wp('30%'),
        borderRadius: 15,
    },

    bookLarge: {
        height: hp('30%'),
        width: wp('40%'),
        borderRadius: 15,
        margin: 10,
    },
    bookLargeShimmer: {
        height: hp('30%'),
        width: wp('40%'),
        borderRadius: 4,
        margin: 10,
        backgroundColor: '#E7E5E7',
    },

    bookExtraLarge: {
        height: hp('50%'),
        width: wp('65%'),
        borderRadius: 20,
        margin: 5,
        alignSelf: 'center',
    },

    bookTrendingShimmer: {
        height: hp('25%'),
        width: wp('37%'),
        borderRadius: 4,
        backgroundColor: '#E7E5E7',
    },
    bookTrendingExtraLargeShimmer: {
        height: hp('45%'),
        width: wp('60%'),
        borderRadius: 20,
        backgroundColor: '#E7E5E7',
        alignSelf: 'center',
    },

    textTitleEnlarged: {
        fontSize: 30,
        maxWidth: wp('60%'),
        fontWeight: '500',
        alignSelf: 'center',
    },
    authorTitleEnlarged: {
        maxWidth: wp('55%'),
        color: 'red',
        fontWeight: '300',
        alignSelf: 'center',
        fontSize: 20,
    },

    bookGeneralShimmer: {
        height: hp('20%'),
        width: wp('30%'),
        borderRadius: 4,
        backgroundColor: '#E7E5E7',
    },

    bookView: {
        backgroundColor: 'transparent',
        margin: 2,
        borderRadius: 20,
    },

    heartIconTrending: {
        position: 'absolute',
        marginVertical: hp('21%'),
        marginHorizontal: DeviceInfo.isTablet() ? wp('9%') : wp('4%'),
    },
    heartIconLarge: {
        position: 'absolute',
        marginVertical: hp('26%'),
        marginHorizontal: DeviceInfo.isTablet() ? wp('9%') : wp('4%'),
    },
    textTitle: {
        maxWidth: wp('30%'),
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    authorTitle: {
        maxWidth: wp('30%'),
        fontWeight: '200',
        alignSelf: 'center',
        textAlign: 'center',
    },
    textTitleShimmer: {
        width: wp('30%'),
        backgroundColor: '#E7E5E7',
        marginTop: 2,
        alignSelf: 'center',
    },
    heartIconGeneral: {
        position: 'absolute',
        marginVertical: hp('16%'),
        marginHorizontal: DeviceInfo.isTablet() ? wp('7%') : wp('4%'),
    },
});
export default styles;
