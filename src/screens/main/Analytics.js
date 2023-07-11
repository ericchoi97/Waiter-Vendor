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

export default class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <Header back showTitle title={'Analytics'} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={styles.analyticsConatiner}>
            <View style={styles.analytics}>
              <Text style={styles.headerText}>Data Display Table for: </Text>
              <View style={styles.infoContainer}>
                <View style={styles.container}>
                  <Text style={styles.rightText}>Average Server Time: </Text>
                  <View style={styles.hr}></View>
                  <Text style={styles.leftText}> 10:50</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.rightText}>Hails per day: </Text>
                  <View style={styles.hr}></View>
                  <Text style={styles.leftText}> 200</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.rightText}>Tables most used: </Text>
                  <View style={styles.hr}></View>
                  <Text style={styles.leftText}> 40</Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    analyticsConatiner: {
        marginBottom: 70,
        marginTop: 26,
        alignItems: 'center',
    },
    analytics: {
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        width: 343,
        height: 600,
        backgroundColor: colors.QrBackground,
        borderRadius: 8, 
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.white,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Poppins',
      },
    infoContainer: {
      flexDirection: 'column',
      width: 300,
      marginTop: 20,
    },
    container: {
        justifyContent: 'space-around',
        height: 18,
        flexDirection: 'row',
        marginTop: 16,
    },
    hr: {
        borderBottomColor: colors.textGrey,
        borderBottomWidth: 1,
        height: 18,
        flex: 1,
    },
    rightText: {
        fontFamily: 'Poppins',
        fontSize: 13,
        color: colors.textGrey,
        marginRight: 8,
    },
    leftText: {
        fontFamily: 'Poppins',
        fontSize: 13,
        color: colors.black,
        fontWeight: '500',
        marginLeft: 8,
    }
});
