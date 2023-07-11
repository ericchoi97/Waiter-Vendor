import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import {ButtonDefault, MainScreenCard} from '../../components/Action';
import {colors, images, screenWidth} from '../../config/Constant';
import text from '../../assets/styles/text';

export default class VendorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={[appStyle.wrapper]}>
            <View style={styles.topView}>
              <View style={styles.logoTopView}>
                <View>
                  <Image style={styles.logoView} source={images.logo} />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('VendorTermsConditions')
                  }
                  style={[appStyle.asCenter, appStyle.ph10]}>
                  <Image style={styles.infoView} source={images.info} />
                </TouchableOpacity>
              </View>
              <View style={styles.textTopView}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('VendorLogin')}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.midContainer}>
              <Text style={styles.midContainerText1}>TABLE: </Text>
              <Text style={styles.midContainerText2}>40</Text>
              <Text style={styles.midContainerText3}>Swipe to serve <Image source={images.forward} /></Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.bottomButtonView}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
            <View style={styles.button}>
              <Image style={styles.buttonImg} source={images.document}/>
              <Text style={styles.buttonTxt}>History</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => this.props.navigation.navigate('QRSetup')}>
            <View style={[styles.button, styles.buttonTwoColor]}>
              <Image style={styles.buttonImg} source={images.qrCode}/>
              <Text style={styles.buttonTxt}>QR set-up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Analytics')}>
            <View style={[styles.button, styles.buttonThreeColor]}>
              <Image source={images.work}/>
              <Text style={styles.buttonTxt}>Analytics</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  midContainerText1: {
      fontSize: 40,
      fontFamily: 'Poppins',
      color: colors.black,
  },
  midContainerText2: {
    fontSize: 100,
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: colors.blue,
    fontWeight: 'bold',
},
buttonTxt: {
    marginLeft: 64,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20
},
midContainerText3: {
    fontSize: 15,
    fontFamily: 'Poppins',
    color: colors.black,
    fontWeight: 'bold'
},
  midContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      marginTop: 40,  
  },
  logoView: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  infoView: {
    width: 20,
    resizeMode: 'contain',
    height: 20,
  },
  logoTopView: {
    width: screenWidth.width50,
    flexDirection: 'row',
  },
  textTopView: {
    width: screenWidth.width40,
    alignItems: 'flex-end',
  },
  bottomButtonView: {
    marginBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 72,
      width: 294,
      borderColor: colors.black,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRadius: 8,
      marginTop: 16,
      backgroundColor: colors.innerGreyish,
      padding: 24,
  },
  buttonTwoColor: {
    backgroundColor: colors.innerDarkBlue,
  },
  buttonThreeColor: {
    backgroundColor: colors.innerDarkPurple,
  },
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.blue,
  },
});
