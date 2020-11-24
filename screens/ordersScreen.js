import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
import Slider from '../components/Slider';

export default function ordersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.order}>
        <Text style={styles.title}>Orders</Text>
        <IoniconsI name="ellipsis-horizontal-circle-outline" size={30} />
      </View>
      <Search />

      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  title: {fontSize: 24, fontWeight: '600'},
});
