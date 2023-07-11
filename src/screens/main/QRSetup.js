import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {ButtonDefault, Header, Input} from '../../components/Action';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors, images, screenWidth} from '../../config/Constant';
import text from '../../assets/styles/text';

export default class QRSetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <Header back showTitle title={'QR Set-up'} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={styles.Container}>
            <View style={styles.inputsContainer}>
              <Input>Enter Table Number</Input>
              <Input>Print (AirPlay)</Input>
              <Input>Input</Input>
              <View style={styles.qrContainer}>
                <Text style={styles.qrContainerText}>QR Logo Display</Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 24,
    },
    inputsContainer: {
      height: 56,
      width: 327,
    },
    qrContainer: {
      height: 327,
      width: 327,
      backgroundColor: colors.QrBackground,
      marginTop: 24
    },
    qrContainerText: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Poppins',
      margin: 24
    },
});
