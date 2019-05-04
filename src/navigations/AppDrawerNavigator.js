import { createDrawerNavigator } from 'react-navigation';
import DashboardStackNavigator from './DashboardStackNavigator';
import NewsStackNavigator from './NewsStackNavigator';

const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
      screen: DashboardStackNavigator
    },
    News: {
      screen: NewsStackNavigator
    }
  });
  
  export default AppDrawerNavigator