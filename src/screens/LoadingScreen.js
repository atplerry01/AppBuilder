import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, View } from 'react-native';

var backgroundImage = require('../../assets/img/home_screen_background.jpg');

class LoadingScreen extends Component {
    
    constructor () {
        super();
        this.loadApp();
    }
    
    loadApp = async () => {
        const token = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(token ? 'Dashboard' : 'Auth')
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.homeScreenView}>
                <ActivityIndicator />
{/*                 
                <View style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
                    <Image source={backgroundImage} style={{ flex: 1, height: null, width: null }} />
                </View>
                <Button
                    block={true}
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                >
                    <Text style={{ color: 'white' }}> Search Beers</Text>
                </Button> */}
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


export default LoadingScreen;