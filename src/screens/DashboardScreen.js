import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class DashboardScreen extends Component {

    static navigationOptions = {
      drawerIcon: (
        <Image style={{ width: 24, height: 24}} source={require('../../assets/icon.png')} />
      )
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>DashboardScreen</Text>
        </View>
      );
    }
  }

  export default DashboardScreen;
