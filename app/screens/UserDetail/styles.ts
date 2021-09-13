import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const useStyles = () => {

const theme = useTheme();
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor: theme.colors.background,
    alignItems:'center',
  },
  displayPicture:
  {
    height:heightPercentageToDP('15%'),
    width:widthPercentageToDP('30%'),
    marginVertical:20,
    borderRadius:40,
    backgroundColor:'transparent'

  },
  horizontalRuler: {
   borderBottomWidth: 2,
    marginTop: 3,
    color: 'gray',
    borderBottomColor:'red'
  },
  mainHeading:
  {
  fontWeight:'bold',
  color:theme.colors.text,
  fontSize:25
  },
  subHeading:
  {
    fontWeight:'bold',
    color:theme.colors.text
  },
  infoView:
  {
    marginTop:10,
    flexDirection:'row'
  },
  editView:
      {
        backgroundColor: '#491484',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15,
        borderRadius:20,
        alignItems:'center',
        textAlign:'center',
      
      },
editButton:
    {
    alignSelf:'center',
    justifyContent:'center',
      marginTop: 5,
    },


});
return styles;
}
