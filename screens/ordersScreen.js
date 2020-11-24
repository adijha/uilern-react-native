import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import Search from '../components/Search';
import Slider from '../components/Slider';
import SliderData from '../assets/OrderList.json';
import Card from '../components/Card';
export default function ordersScreen() {
  const [selectedCard, setSelectedCard] = useState(SliderData[0].id);
  return (
    <View style={styles.container}>
      <View style={styles.order}>
        <Text style={styles.title}>Orders</Text>
        <IoniconsI name="ellipsis-horizontal-circle-outline" size={30} />
      </View>
      <ScrollView>
        <Search />
        <Slider />

        {SliderData.map((item) => (
          <Card
            order={item}
            key={item.id}
            selected={selectedCard}
            expand={() => setSelectedCard(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F6F6F7',
  },
  order: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
  title: {fontSize: 24, fontWeight: 'bold'},
});
