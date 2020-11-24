import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';

export default function Search() {
  return (
    <View style={styles.main}>
      <IoniconsI name="md-search-outline" size={25} color="#ABB1B6" />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EDEFF0',
    borderRadius: 30,
    marginHorizontal: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
    height:40
  },
  input: {flex: 1},
});
