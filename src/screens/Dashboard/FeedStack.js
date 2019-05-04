import Icon from '@expo/vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Feed from './Feed';
import FeedDetail from './FeedDetail';

const FeedStack = createStackNavigator(
    {
      Feed: {
          screen: Feed,
          navigationOptions: ({ navigation }) => {
              return {
                  headerTitle: 'Feed',
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
      },
      FeedDetail: {
          screen: FeedDetail
      }
    }
  );

  export default FeedStack;