import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';

const AuthStackNavigator = createStackNavigator(
    {
      Welcome: WelcomeScreen,
      SignIn: SignInScreen,
      SignUp: SignUpScreen
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          
        };
      }
    }
  );
  
  export default AuthStackNavigator;