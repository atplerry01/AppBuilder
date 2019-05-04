import React, { Component } from 'react';
import { Button, View } from 'react-native';
  
class Feed extends Component {
   
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Goto Detail Feed" onPress = {() => this.props.navigation.navigate('FeedDetail')} />
        </View>
      );
    }
  }
  
  export default Feed;