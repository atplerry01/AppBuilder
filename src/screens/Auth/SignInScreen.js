import React, { Component } from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';

class SignInScreen extends Component {

    signIn = async() => {
      await AsyncStorage.setItem('userToken', 'olami');
      this.props.navigation.navigate('Dashboard');
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>SignInScreen</Text>
          <Button title = "SignIn" onPress = { this.signIn } />
        </View>
      );
    }
  }

  export default SignInScreen;
