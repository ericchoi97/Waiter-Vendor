import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import {colors, images, screenHeight, screenWidth} from '../../config/Constant';
import appStyle from '../../assets/styles/appStyle';
import {verifySession} from '../../network/Session';
import * as Progress from 'react-native-progress';
import BackgroundTimer from 'react-native-background-timer';

export default class VendorSplash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      AppType: false,
    };
  }

  static navigationOptions = {
    headerShown: false,
  };

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(time => {
        resolve('splash');
      }, 3000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      //const nav = await verifySession();
      this.props.navigation.navigate('Login');
    }
  }
  componentWillMount() {
    BackgroundTimer.setInterval(() => {
      this.setState({value: this.state.value + 0.05});
    }, 100);

    // this.interval = setInterval(() => this.updateUserLocation(), 15000);
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.flex1, {backgroundColor: '#000'}]}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
        <View style={styles.container}>
          <View></View>
          <View style={[appStyle.aiCenter]}>
            <Image style={styles.splashImg} source={images.logo} />
            <Text style={[styles.splashText]}>WAITER VENDOR</Text>
            <View style={styles.progressBar}>
              <Progress.Bar
                borderRadius={20}
                color={colors.blue}
                unfilledColor={colors.greyDark}
                borderWidth={0}
                progress={this.state.value}
                width={screenWidth.width50}
              />
            </View>
          </View>

          <View style={appStyle.pb20}>
            <Text style={{color: colors.extraLight}}>
              Last App Standing, LLC
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 80,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  splashImg: {
    resizeMode: 'contain',
    width: screenWidth.width50,
    height: screenHeight.height25,
  },
  splashBg: {
    flex: 1,
    resizeMode: 'cover',
  },
  splashText: {
    color: '#fff',
    paddingTop: 20,
    fontSize: 28,
    lineHeight: 32,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
});
