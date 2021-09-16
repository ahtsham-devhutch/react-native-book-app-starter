import React from 'react';
import {ScrollView, View} from 'react-native';
//importing card component
import BookCardShimmer from '../../../components/BookCard/BookCardShimmer';
import {useStyles} from '../styles';

interface Props {}

const Shimmer: React.FC<Props> = () => {
  //theme handling
  const styles = useStyles();

  return (
    <View>
      <ScrollView>
        <BookCardShimmer styleSelect="Large" />

        <View style={styles.horizontalRuler} />

        <View style={styles.mainShimmerView}></View>

        <View style={styles.subShimmerView}></View>
      </ScrollView>
    </View>
  );
};

export default Shimmer;
