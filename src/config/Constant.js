import {Dimensions} from 'react-native';

//Size
export const screenHeight = {
  height10: Math.round((10 / 100) * Dimensions.get('window').height),
  height12: Math.round((12 / 100) * Dimensions.get('window').height),
  height14: Math.round((14 / 100) * Dimensions.get('window').height),
  height20: Math.round((20 / 100) * Dimensions.get('window').height),
  height22: Math.round((22 / 100) * Dimensions.get('window').height),
  height25: Math.round((25 / 100) * Dimensions.get('window').height),
  height27: Math.round((27 / 100) * Dimensions.get('window').height),
  height30: Math.round((30 / 100) * Dimensions.get('window').height),
  height35: Math.round((35 / 100) * Dimensions.get('window').height),
  height40: Math.round((40 / 100) * Dimensions.get('window').height),
  height45: Math.round((45 / 100) * Dimensions.get('window').height),
  height50: Math.round((50 / 100) * Dimensions.get('window').height),
  height60: Math.round((60 / 100) * Dimensions.get('window').height),
  height70: Math.round((70 / 100) * Dimensions.get('window').height),
  height100: Math.round(Dimensions.get('window').height),
};

export const screenWidth = {
  width15: Math.round((15 / 100) * Dimensions.get('window').width),
  width20: Math.round((20 / 100) * Dimensions.get('window').width),
  width25: Math.round((25 / 100) * Dimensions.get('window').width),
  width30: Math.round((30 / 100) * Dimensions.get('window').width),
  width35: Math.round((35 / 100) * Dimensions.get('window').width),
  width38: Math.round((38 / 100) * Dimensions.get('window').width),
  width40: Math.round((40 / 100) * Dimensions.get('window').width),
  width42: Math.round((42 / 100) * Dimensions.get('window').width),
  width45: Math.round((45 / 100) * Dimensions.get('window').width),
  width50: Math.round((50 / 100) * Dimensions.get('window').width),
  width60: Math.round((60 / 100) * Dimensions.get('window').width),
  width65: Math.round((65 / 100) * Dimensions.get('window').width),
  width70: Math.round((70 / 100) * Dimensions.get('window').width),
  width74: Math.round((74 / 100) * Dimensions.get('window').width),

  width75: Math.round((75 / 100) * Dimensions.get('window').width),
  width80: Math.round((80 / 100) * Dimensions.get('window').width),
  width90: Math.round((90 / 100) * Dimensions.get('window').width),
  width100: Math.round(Dimensions.get('window').width),
};

//colors
export const colors = {
  themeDefault: '#ED716E',
  themeSecondary: '#25253D',
  yellow: 'rgba(255, 203, 47,1)',
  blue: '#00D3F9',
  pink: '#FF4949',
  green: '#21DB0C',
  yellowLight: '#fcf1ca',
  blueLight: '#92ecfc',
  pinkLight: '#fc9f9f',
  greenLight: '#c8f1ca',
  inputColor: '#F8F8F8',
  placeholder: '#8F9BB3',
  black: '#231F20',
  white: '#fff',
  pureWhite: '#F9F9F9',
  grey: '#B1B3B7',
  greyish: '#C0C6CB',
  innerGreyish: '#f9f9fa',
  purpleish: '#98A5C0',
  innerPurpleish: '#f5f6f9',
  innerPinkish: 'rgba(255, 122, 0, 0.1)',
  blueish: '#536CB5',
  innerBlueish: '#eef0f8',
  darkBlueish: '#27408E',
  innerdarkBlueish: '#e9ecf4',
  skyBlue: '#005EEC',
  shadowColor: '#F9F9F9',
  greyDark: '#919191',
  green: '#03C977',
  regularGray: '#707070',
  lightGray: '#E5E5E5',
  red: '#FF4365',
  lightWhite: 'rgba(255,255,255,1)',
  lightBrown: '#ebe9e8',
  extraLight: 'rgba(187, 187, 187, 1)',
  innerDarkBlue: 'rgba(83, 108, 181, 0.1)',
  innerDarkPurple: 'rgba(39, 64, 142, 0.1)',
  textGrey: '#9C9C9C',
  QrBackground: 'rgba(0, 211, 249, 0.1)',
};

//Images
export const images = {
  logo: require('../assets/images/logo.png'),
  dummy: require('../assets/images/others/dummy.png'),
  back: require('../assets/images/icons/back.png'),
  checked: require('../assets/images/icons/checked.png'),
  unCkecked: require('../assets/images/icons/unChecked.png'),
  plus: require('../assets/images/icons/plus.png'),
  user: require('../assets/images/icons/user.png'),
  info: require('../assets/images/icons/info.png'),
  forward: require('../assets/images/icons/forward.png'),
  work: require('../assets/images/icons/Work.png'),
  document: require('../assets/images/icons/Document.png'),
  qrCode: require('../assets/images/icons/qr-code.png'),
};

//screens
export const screen = {
  //main
  Lessons: 'Lessons',
  Settings: 'Settings',

  //registration
  TabNavigator: 'TabNavigator',
  Splash: 'Splash',
  Login: 'Login',
  Signup: 'Signup',
  SignupMethods: 'SignupMethods',
  ForgotPassword: 'ForgotPassword',
};

export const navThemeConstants = {
  light: {
    backgroundColor: '#fff',
    fontColor: '#000',
    headerStyleColor: '#E8E8E8',
    iconBackground: '#F4F4F4',
  },
  dark: {
    backgroundColor: '#000',
    fontColor: '#fff',
    headerStyleColor: 'E8E8E8',
    iconBackground: '#e6e6f2',
  },
};

export const fontSet = {
  xxlarge: 40,
  xlarge: 30,
  large: 20,
  middle: 18,
  normal: 14,
  small: 12,
  xsmall: 11,
};

export const sizeSet = {
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
};

export const hitArea = {
  hitArea: {top: 20, bottom: 20, left: 50, right: 50},
};