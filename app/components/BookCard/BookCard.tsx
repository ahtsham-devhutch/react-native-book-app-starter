import React from 'react';
import {View,TouchableOpacity,TouchableHighlight, Image, ScrollView,FlatList, Alert, BackHandler} from 'react-native';
import {Text} from 'react-native-paper';
//image with placeholder
import FastImage from 'react-native-fast-image';
import NavigationService from './../../navigation/NavigationService';
//verctor icons
import Icon from 'react-native-vector-icons/FontAwesome';
//importing style
import styles from './styles';
//for responsive screen
import { heightPercentageToDP } from 'react-native-responsive-screen';

interface Props {
    url?: string;
    bookTitle?:string;
    styleSelect: 'General' | 'Custom';
    isFavorite?: boolean;
    refreshing?: boolean
    authorName?:string;
    }
    const BookCard: React.FC<Props> = ({url, styleSelect, isFavorite, bookTitle, refreshing, authorName}) => 
    {
    return (
      

          <View style={styles.bookView}>
          <FastImage source={{uri:url,
          priority: FastImage.priority.normal,
          }}
          style={styleSelect=='General' ? styles.bookGeneral : styles.bookTrending} />
          {isFavorite==null ? <View></View> : <Icon name="heart" size={25} style={styleSelect=='General' ? styles.heartIconGeneral : styles.heartIconTrending} color={isFavorite ? 'red' : 'white'} /> }
          <Text style={styles.textTitle}>{bookTitle}</Text> 
          <Text style={styles.textTitle}>{authorName}</Text> 
          
          </View>

    )};

export default BookCard;