import React, { Component } from 'react';
import { Button, View } from 'react-native';
  
class Feed extends Component {
  static navigationOptions = { 
    // headerStyle: { 
    //   position: 'absolute', 
    //   backgroundColor: 'transparent', 
    //   zIndex: 100, 
    //   top: 0, 
    //   left: 0, 
    //   right: 0 
    // },
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Goto Detail Feed" onPress = {() => this.props.navigation.navigate('FeedDetail')} />
        </View>
      );
    }
  }
  
  export default Feed;