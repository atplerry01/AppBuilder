import { Body, Container, Content, Header } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import AirbnbStackNavigator from './AirbnbStackNavigator';
import AmazonStackNavigator from './AmazonStackNavigator';
import DashboardStackNavigator from './DashboardStackNavigator';
import InstagramStackNavigator from './InstagramStackNavigator';
import NewsStackNavigator from './NewsStackNavigator';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height: 200}}>
      <Body>
        <Image style={{ width: 150, height: 150, borderRadius: 75}} source={require('../../assets/icon.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const AppDrawerNavigator = createDrawerNavigator({
    AirBNB: {
      screen: AirbnbStackNavigator
    },
    Instagram: {
      screen: InstagramStackNavigator
    },
    Amazon: {
      screen: AmazonStackNavigator
    },
    Dashboard: {
      screen: DashboardStackNavigator
    },
    News: {
      screen: NewsStackNavigator
    }
  },{
    initialRouteName: 'Dashboard',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });
  
  export default AppDrawerNavigator