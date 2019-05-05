import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from './Profile';

const ProfileStack = createStackNavigator(
    {
      Profile: {
          screen: Profile,
          navigationOptions: ({ navigation }) => {
              return {
                  headerTitle: 'Profile',
                  headerLeft: (
                    <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu"
                    size={30}
                  />
                )
              }
          }
      }
    }
  );

  export default ProfileStack;