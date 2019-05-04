import { Button } from 'native-base';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

var backgroundImage = require('../../assets/img/home_screen_background.jpg');

class WelcomeScreen extends Component {
    
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.homeScreenView}>

                <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
                    <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
                </View>
                <Button
                    block={true}
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                    <Text style={{ color: 'white' }}> Search Beers</Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    homeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})


export default WelcomeScreen;