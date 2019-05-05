import React, { Component } from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';

class Settings extends Component {

    signOut = async() => {
      await AsyncStorage.clear();
      this.props.navivation.navigate('Dashboard');
    }

    render() {
      
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Settings</Text>
          <Button title="Sign Out" onPress={() => this.signOut } />
        </View>
      );
    }
  }

  export default Settings;