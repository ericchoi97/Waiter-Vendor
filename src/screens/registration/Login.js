import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {ButtonDefault, Header, Input} from '../../components/Action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors} from '../../config/Constant';

export default class VendorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={[appStyle.wrapper]}>
            <View style={appStyle.pt30}>
              <View style={appStyle.pb15}>
                <Text style={styles.loginText}>Login</Text>
              </View>
              <Input keyboardType={'email-address'}>Email Address</Input>
              <Input secureTextEntry={true}>Password</Input>
              <TouchableOpacity style={[appStyle.aiCenter, appStyle.pv10]}>
                <Text style={styles.forgotText}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={[appStyle.pb20, appStyle.ph20]}>
          <ButtonDefault style={styles.buttonColor} onPress={() => this.props.navigation.navigate('Home')}>
            Login
          </ButtonDefault>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Signup')}
          style={[appStyle.row, appStyle.pb20, appStyle.jcCenter]}>
          <Text style={{color: colors.extraLight}}>Don't have an account?</Text>
          <Text style={styles.alreadyText}> Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  loginText: {
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
});
