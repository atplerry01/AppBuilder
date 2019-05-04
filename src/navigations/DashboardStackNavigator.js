import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DashboardTabNavigator from './DashboardTabNavigator';


const DashboardStackNavigator = createStackNavigator(
    {
      DashboardTabNavigator: DashboardTabNavigator
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
  
  export default DashboardStackNavigator;