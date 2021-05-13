import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../Feed';
import History from '../History';
import Profile from '../Profile';
import {MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator initialRouteName="History">
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="rss-feed" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="face" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
