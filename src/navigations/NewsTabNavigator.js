
import { createBottomTabNavigator } from 'react-navigation';
import NewsFeed from '../screens/News/NewsFeed';
import NewsSettings from '../screens/News/NewsSettings';

const NewsTabNavigator = createBottomTabNavigator(
    {
      NewsFeed,
      NewsSettings
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

  export default NewsTabNavigator;
  