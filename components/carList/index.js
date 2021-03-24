import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import CarItem from '../../components/carItem/index';

import styles from './style';
import cars from './cars';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={0.7}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default CarList;
