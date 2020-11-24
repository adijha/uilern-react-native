import 'react-native-gesture-handler';
import {Text} from 'react-native';
import React from 'react';
import OrdersScreen from './screens/ordersScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsI from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function MyBox() {
  return <Text style={{textAlign: 'center'}}>My Box</Text>;
}
function Drivers() {
  return <Text style={{textAlign: 'center'}}>Drivers</Text>;
}
function Analysis() {
  return <Text style={{textAlign: 'center'}}>Analysis</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Orders"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            color = focused && '#FF9600';
            if (route.name === 'Orders') {
              iconName = 'list-outline';
            } else if (route.name === 'My Box') {
              iconName = 'basket-outline';
            } else if (route.name === 'Drivers') {
              iconName = 'people-outline';
            } else if (route.name === 'Analysis') {
              iconName = 'ios-analytics-outline';
            }
            return <IoniconsI name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="My Box" component={MyBox} />
        <Tab.Screen name="Orders" component={OrdersScreen} />
        <Tab.Screen name="Drivers" component={Drivers} />
        <Tab.Screen name="Analysis" component={Analysis} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
