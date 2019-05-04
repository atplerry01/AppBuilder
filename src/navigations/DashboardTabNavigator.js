
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Feed from '../screens/Dashboard/Feed';
import Profile from '../screens/Dashboard/Profile';
import Settings from '../screens/Dashboard/Settings';

const DashboardTabNavigator = createBottomTabNavigator(
    {
      Feed: {
        screen: Feed,
        navigationOptions: {
          tabBarLabel: 'FEED',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-checkmark-circle" color={tintColor} size={24} />
          )
        }
      },
      Profile,
      Settings
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerTitle: routeName,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          color: '#036',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };
      }
    }
  );

  export default DashboardTabNavigator;