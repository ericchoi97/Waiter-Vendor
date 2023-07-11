import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/registration/Splash';
import Login from '../screens/registration/Login';
import Signup from '../screens/registration/Signup';
import ForgotPassword from '../screens/registration/ForgotPassword';
import Home from '../screens/main/Home';
import TermsAndConditions from '../screens/main/Terms&Conditions';
import History from '../screens/main/History';
import QRSetup from '../screens/main/QRSetup';
import Analytics from '../screens/main/Analytics';
const SplashStack = createStackNavigator(
  {
    Splash: Splash,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AuthStack = createStackNavigator(
  //Registration: Registration
  {
    Signup: Signup,
    Login: Login,
    ForgotPassword: ForgotPassword,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const MainStack = createStackNavigator(
  //Registration: Registration
  {
    Home: Home,
    TermsConditions: TermsAndConditions,
    History: History,
    QRSetup: QRSetup,
    Analytics: Analytics,
  },

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
export default createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashStack,
      Auth: AuthStack,
      Main: MainStack,
    },

    {
      initialRouteName: 'Splash',
    },
  ),
);
