import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import AmazonTabNavigator from './AmazonTabNavigator';

const AmazonStackNavigator = createStackNavigator(
    {
      AmazonTabNavigator: AmazonTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              color='#fff'
              size={30}
            />
          ),
          headerTintColor: '#fff'
        };
      }

    }
  );
  
  export default AmazonStackNavigator;