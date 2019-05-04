
import { createBottomTabNavigator } from 'react-navigation';
import Feed from '../screens/Dashboard/Feed';
import Profile from '../screens/Dashboard/Profile';
import Settings from '../screens/Dashboard/Settings';


const DashboardTabNavigator = createBottomTabNavigator(
    {
      Feed,
      Profile,
      Settings
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          headerTitle: routeName
        };
      }
    }
  );

  export default DashboardTabNavigator;