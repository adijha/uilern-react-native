import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';

export default function ordersScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <Text style={{fontSize: 24, fontWeight: '600'}}>Orders</Text>
        <IoniconsI name="ellipsis-horizontal-circle-outline" size={30} />
      </View>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
