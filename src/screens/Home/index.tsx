import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../Feed';
import History from '../History';
import Profile from '../Profile';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator initialRouteName="History">
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
