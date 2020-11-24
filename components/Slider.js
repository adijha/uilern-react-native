import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';

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
        style={item === selectedId && {backgroundColor: 'orange'}}
        textStyle={item === selectedId && styles.sliderSelectedText}
      />
    );
  };

  return (
    <FlatList
      style={{marginTop: 20}}
      data={sliderContent}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      horizontal
    />
  );
}

const styles = StyleSheet.create({
  item: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  sliderText: {fontSize: 15, color: 'gray'},
  sliderSelectedText: {color: '#fff', fontWeight: '700'},
});
