import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IoniconsI from 'react-native-vector-icons/Ionicons';
export default function Card({order, selected, expand}) {
  return (
    <View style={styles.container} key={order.id}>
      <View style={styles.title}>
        <Text style={{fontWeight: 'bold'}}>
          {order.id}, <Text style={styles.date}>{order.date}</Text>
        </Text>
        <TouchableOpacity onPress={() => expand()}>
          <IoniconsI name="chevron-down" size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.amountWrap}>
        <IoniconsI name="ios-card" size={20} />
        <Text style={styles.amount}>{order.amount}</Text>
      </View>
      {selected === order.id && (
        <>
          <Text style={styles.grayTitle}>Driver Name</Text>
          <Text style={styles.content}>{order.driver}</Text>

          <Text style={styles.grayTitle}>Ship to Name</Text>
          <Text style={styles.content}>{order.shipTo}</Text>
          <Text style={styles.grayTitle}>Shipping Address</Text>
          <Text style={styles.content}>{order.shippingAddress}</Text>

          <Text style={styles.grayTitle}>{order.quantity} Item</Text>
          {order.product.map((product, index) => (
            <Text key={index} style={styles.content}>
              {product}
            </Text>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    padding: 15,
    marginBottom: 10,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grayTitle: {
    color: 'gray',
    marginTop: 10,
    fontSize: 13,
  },
  content: {
    fontSize: 13,
  },
  amount: {marginLeft: 7, color: '#00C860', fontWeight: 'bold'},
  amountWrap: {flexDirection: 'row', marginTop: 5},
  date: {color: 'gray', fontWeight: 'normal'},
});
