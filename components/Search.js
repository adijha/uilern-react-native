import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';

export default function Search() {
  return (
    <View style={styles.main}>
      <IoniconsI name="md-search-outline" size={25} color="gray" />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    borderRadius: 30,
    marginHorizontal: 30,
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 15,
  },
  input: {flex: 1},
});
