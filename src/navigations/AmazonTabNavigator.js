
import { createBottomTabNavigator } from 'react-navigation';
import FeedStack from '../screens/Amazon/FeedStack';
import ProfileStack from '../screens/Amazon/ProfileStack';
import SettingsStack from '../screens/Amazon/SettingsStack';

const AmazonTabNavigator = createBottomTabNavigator(
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
        };
      }
    }
  );

  export default AmazonTabNavigator;