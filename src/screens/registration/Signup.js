import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {ButtonDefault, Header, Input} from '../../components/Action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors, images, screenWidth} from '../../config/Constant';
import text from '../../assets/styles/text';

export default class VendorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkTerms: images.unCkecked,
    };
  }
  onPressCheckTerms = () => {
    this.setState(prevState => ({
      checkTerms:
        prevState.checkTerms === images.unCkecked
          ? images.checked
          : images.unCkecked,
    }));
  };
  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={[appStyle.wrapper]}>
            <View style={appStyle.pt30}>
              <View style={[appStyle.rowBtw]}>
                <Text style={styles.signUpText}>Sign Up</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={[appStyle.pv20, {width: screenWidth.width25}]}>
                <Image style={styles.profileImage} source={images.user} />
                <View style={styles.profileAddView}>
                  <Image style={styles.addImage} source={images.plus} />
                </View>
              </View>
              <Input>Full name</Input>
              <Input>Mobile number</Input>
              <Input keyboardType={'email-address'}>Email address</Input>
              <Input secureTextEntry={true}>Password</Input>
              <View
                style={[
                  appStyle.rowStart,
                  appStyle.aiFlexStart,
                  appStyle.mv10,
                ]}>
                <TouchableOpacity onPress={() => this.onPressCheckTerms()}>
                  <Image
                    style={styles.checkboxView}
                    source={this.state.checkTerms}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('TermsAndConditions')
                  }
                  style={appStyle.rowWrap}>
                  <Text style={[styles.termsTextNormal, appStyle.ml10]}>
                    I agree to{' '}
                  </Text>
                  <Text style={[styles.termsTextTheme]}>
                    Terms and Conditions{' '}
                  </Text>

                  <Text style={[styles.termsTextNormal]}>and </Text>
                  <Text style={[styles.termsTextTheme, appStyle.pl10]}>
                    Privicy Policy{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={[appStyle.pb20, appStyle.ph20]}>
          <ButtonDefault onPress={() => this.props.navigation.navigate('Home')}>
            Sign Up
          </ButtonDefault>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  loginText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.blue,
  },
  signUpText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 27,
  },
  forgotText: {
    color: colors.blue,
    fontSize: 15,
  },
  alreadyText: {
    color: colors.blue,
    fontWeight: '500',
  },

  profileAddView: {
    backgroundColor: colors.blue,
    borderRadius: 20,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 65,
    //right: 17,
    left: 50,
  },

  profileImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  addImage: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  checkboxView: {
    width: 22,
    height: 22,
    marginTop: 5,
    resizeMode: 'contain',
  },
  termsTextTheme: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.blue,
    fontFamily: 'Poppins-Regular',
    lineHeight: 22.5,
  },
  termsTextNormal: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.black,
    fontFamily: 'Poppins-Regular',
    lineHeight: 22.5,
  },
});
