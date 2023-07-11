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

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={[appStyle.safeContainer]}>
        <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
        <Header back showTitle title={'History'} />
        <KeyboardAwareScrollView
          contentContainerStyle={appStyle.scrollContainer}
          keyboardShouldPersistTaps="always">
          <View style={styles.historyConatiner}>
            <View style={styles.history}>
              <View style={styles.historyTopContainer}>
                <Text style={styles.historyHeaderText}>Table 1</Text>
              </View>
              <View style={styles.historyBottomContainer}>
                <View style={styles.bottomRight}>
                    <Text style={styles.subText}>Date: </Text>
                    <Text style={styles.mainText}>11-02-21</Text>
                </View>
                <View style={styles.bottomLeft}>
                    <Text style={styles.subText}>Time: </Text>
                    <Text style={styles.mainText}>10:20</Text>
                </View> 
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyTopContainer}>
                <Text style={styles.historyHeaderText}>Table 1</Text>
              </View>
              <View style={styles.historyBottomContainer}>
                <View style={styles.bottomRight}>
                    <Text style={styles.subText}>Date: </Text>
                    <Text style={styles.mainText}>11-02-21</Text>
                </View>
                <View style={styles.bottomLeft}>
                    <Text style={styles.subText}>Time: </Text>
                    <Text style={styles.mainText}>10:20</Text>
                </View> 
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyTopContainer}>
                <Text style={styles.historyHeaderText}>Table 1</Text>
              </View>
              <View style={styles.historyBottomContainer}>
                <View style={styles.bottomRight}>
                    <Text style={styles.subText}>Date: </Text>
                    <Text style={styles.mainText}>11-02-21</Text>
                </View>
                <View style={styles.bottomLeft}>
                    <Text style={styles.subText}>Time: </Text>
                    <Text style={styles.mainText}>10:20</Text>
                </View> 
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyTopContainer}>
                <Text style={styles.historyHeaderText}>Table 1</Text>
              </View>
              <View style={styles.historyBottomContainer}>
                <View style={styles.bottomRight}>
                    <Text style={styles.subText}>Date: </Text>
                    <Text style={styles.mainText}>11-02-21</Text>
                </View>
                <View style={styles.bottomLeft}>
                    <Text style={styles.subText}>Time: </Text>
                    <Text style={styles.mainText}>10:20</Text>
                </View> 
              </View>
            </View>
            <View style={styles.history}>
              <View style={styles.historyTopContainer}>
                <Text style={styles.historyHeaderText}>Table 1</Text>
              </View>
              <View style={styles.historyBottomContainer}>
                <View style={styles.bottomRight}>
                    <Text style={styles.subText}>Date: </Text>
                    <Text style={styles.mainText}>11-02-21</Text>
                </View>
                <View style={styles.bottomLeft}>
                    <Text style={styles.subText}>Time: </Text>
                    <Text style={styles.mainText}>10:20</Text>
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
    historyConatiner: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 24
    },
    history: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 16,
        padding: 15,
        width: 343,
        height: 74,
        backgroundColor: colors.innerPinkish,
        borderRadius: 8, 
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.white,
    },
    historyTopContainer: {
        flex: 0.5,
    },
    historyBottomContainer: {
        flex: 0.5,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 6
    },
    historyHeaderText: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 15,    
    },
    bottomRight: {
        flex: 0.5,
        flexDirection: 'row',
        marginRight: 160,
    },
    bottomLeft: {
        flex: 0.5,
        flexDirection: 'row',
    },
    subText: {
        fontSize: 13,
        fontWeight: 'normal',
        fontFamily: 'Poppins',
        color: colors.textGrey,
    },
    mainText: {
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Poppins',
        color: colors.back
    },
});
