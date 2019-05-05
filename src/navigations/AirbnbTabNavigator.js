
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import FeedStack from '../screens/Airbnb/FeedStack';
import ProfileStack from '../screens/Airbnb/ProfileStack';
import SettingsStack from '../screens/Airbnb/SettingsStack';

const AirbnbTabNavigator = createBottomTabNavigator(
    {
      Feed: {
        screen: FeedStack
      },
      ProfileStack,
      SettingsStack
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          headerTitle: routeName,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          color: '#036',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
          animationEnabled: true,
          swipeEnabled: true,
          tabBarPosition: "bottom",
          tabBarOptions: {
              style: {
                  ...Platform.select({
                      android: {
                          backgroundColor: 'white'
                      }
                  })
              },
              activeTintColor: '#000',
              inactiveTintColor: '#d1cece',
              showLabel: false,
              showIcon: true
          }
        };
      }
    }
  );

  export default AirbnbTabNavigator;