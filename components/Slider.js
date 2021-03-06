import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';

export default function Slider() {
  const sliderContent = [
    'Waiting for Inventory',
    'With Drivers',
    'Delivered',
    'On the way',
  ];
  const [selectedId, setSelectedId] = useState(sliderContent[1]);

  const Item = ({item, onPress, style, textStyle}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={[styles.sliderText, textStyle]}>{item}</Text>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item)}
        style={item === selectedId && {backgroundColor: '#FF9600'}}
        textStyle={item === selectedId && styles.sliderSelectedText}
      />
    );
  };

  return (
    <View
      style={{
        height: 70,
      }}>
      <FlatList
        style={{
          marginTop: 20,
        }}
        showsHorizontalScrollIndicator={false}
        data={sliderContent}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: 35,
    marginHorizontal: 8,
  },
  sliderText: {fontSize: 15, color: 'gray'},
  sliderSelectedText: {color: '#fff', fontWeight: '700'},
});
