import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';


class WelcomeScreen extends Component {

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>WelcomeScreen</Text>
          <Button title='SignIn' onPress = { () => this.props.navigation.navigate('SignIn') } />
          <Button title='SignUp' onPress = { () => this.props.navigation.navigate('SignUp') } />
        </View>
      );
    }
  }

  export default WelcomeScreen;
