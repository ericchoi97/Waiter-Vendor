import React, {Component, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

import {
  colors,
  screenHeight,
  screenWidth,
  images,
  styleSet,
  fontSet,
} from '../config/Constant';
import appStyle from '../assets/styles/appStyle';
// var FloatingLabel = require('react-native-floating-labels');
import * as helper from '../utils/Helper';
import LeftComponent from '../components/headerComponent/LeftComponent';
import text from '../assets/styles/text';
import * as Progress from 'react-native-progress';

const ButtonDefault = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        styles.buttonTheme,
        {
          maxWidth: props.maxWidth,
          height: props.maxHeight == true ? 50 : 60,
          marginTop: props.marginTop == null ? 5 : props.marginTop,
          marginBottom: props.marginBottom == null ? 5 : props.marginBottom,

          display: props.display,

          backgroundColor: 
            props.btnDanger == true
              ? colors.red
              : props.btnSecondary == true
              ? '#000'
              : props.disabledColor == true
              ? colors.lightGray
              : colors.blue,
        },
      ]}>
      <Text
        style={[
          {
            fontWeight: '600',
            fontSize: 17,
            textAlign: 'center',
            color: colors.white,
            textTransform: 'capitalize',
          },
        ]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export {ButtonDefault};

const Input = props => {
  return (
    <View style={[styles.formInput]}>
      <TextInput
        selectionColor={colors.themeDefault}
        style={styles.input}
        value={props.value}
        placeholder={props.children}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        editable={props.editable}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export {Input};
const InputWithText = props => {
  return (
    <View style={[styles.input, appStyle.mv10, appStyle.rowBtw]}>
      <TextInput
        style={{flex: 1}}
        selectionColor={colors.themeDefault}
        placeholder={props.placeholder}
        placeholderTextColor={colors.placeholder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
      />
      <TouchableOpacity>
        <Text style={[text.blue, text.text16]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {InputWithText};
const MainScreenCard = props => {
  return (
    <View
      style={[
        styles.cardMainView,
        {
          backgroundColor: props.mainColor,
        },
      ]}>
      <View
        style={[
          styles.innerCardView,
          {
            backgroundColor: props.innerColor,
          },
        ]}>
        <View style={[appStyle.rowBtw, appStyle.ph10]}>
          <Text style={[text.semibold]}>{props.title}</Text>
          <Text style={[text.greyDark]}>{props.description}</Text>
        </View>
        <View style={[appStyle.ph10, appStyle.pv10]}>
          <Progress.Bar
            //height={15}
            borderRadius={25}
            color={props.mainColor}
            unfilledColor={colors.white}
            borderWidth={0}
            progress={props.value}
            width={screenWidth.width74}
          />
        </View>
      </View>
    </View>
  );
};

export {MainScreenCard};

const Textarea = props => {
  return (
    <View style={[styles.textareaInput]}>
      <TextInput
        selectionColor={colors.themeDefault}
        placeholder={
          props.children == null ? 'Enter your message' : props.children
        }
        style={styles.textarea}
        value={props.value}
        multiline={true}
        placeholderTextColor={colors.placeholder}
        onChangeText={props.onChangeText}></TextInput>
    </View>
  );
};

export {Textarea};
//Header
export const Header = props => {
  return (
    <View
      style={[
        props.shadow == true && styles.shadow,
        {
          backgroundColor: colors.white,
          height: 60,
          paddingHorizontal: 20,
          alignItems: 'flex-end',
        },
      ]}>
      <View style={[appStyle.rowBtw, appStyle.flex1]}>
        {props.back == true && (
          <LeftComponent themeLight={props.themeLight == true ? true : false} />
        )}

        <View
          style={[
            appStyle.aiCenter,
            props.showHeaderRight == true && props.showTitle == true
              ? appStyle.pl20
              : appStyle.pr30,
            appStyle.flex1,
          ]}>
          {props.showTitle == true && (
            <Text style={{fontSize: 16, fontFamily: 'Poppins-SemiBold'}}>
              {props.title}
            </Text>
          )}

          {props.showSubTitle == true && (
            <TouchableOpacity onPress={props.onPressSubtitle}>
              <Text style={{fontSize: 12}}>{props.subTitle}</Text>
            </TouchableOpacity>
          )}
        </View>

        {props.showHeaderRight == true && (
          <View style={[appStyle.rowCenter]}>
            <TouchableOpacity
              onPress={props.onPressHeaderRight}
              style={[appStyle.rowCenter, appStyle.mr10]}>
              <Text style={[appStyle.pr5]}>{props.headerRightTitle}</Text>
              <Image
                style={image.headerIcon}
                tintColor={props.tint1}
                source={props.headerRightIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={props.onPressHeaderRight2}
              style={[appStyle.rowCenter]}>
              <Text style={[appStyle.pr5]}>{props.headerRightTitle2}</Text>
              <Image
                style={image.headerIcon}
                tintColor={props.tint2}
                source={props.headerRightIcon2}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'rgba(0,0,0,0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.0,

    elevation: 6,
  },
  buttonTheme: {
    backgroundColor: colors.themeDefault,
    width: '100%',
    //paddingVertical: 20,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: 'rgba(0,0,0,0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.0,
    elevation: 3,
  },
  formInput: {
    paddingVertical: 8,

    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 0,
    color: colors.black,
    // paddingTop: 5,
    fontSize: 16,
    fontFamily: 'SofiaPro-Regular',
    backgroundColor: colors.inputColor,
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 25,
    flex: 1,
  },
  textareaInput: {
    borderColor: '#EEEEEE',
    borderWidth: 1,
    backgroundColor: colors.inputColor,
    width: '100%',
    flex: 1,
    borderRadius: 12,
    marginVertical: 15,
    paddingHorizontal: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 3.0,

    elevation: 3,
  },
  textarea: {
    borderWidth: 0,
    height: screenHeight.height40,
    textAlignVertical: 'top',
    color: '#000000',
    fontSize: 14,
    fontFamily: 'SofiaPro-Regular',
    color: colors.black,
  },
  iconSm: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  headerIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  cardMainView: {
    height: 80,
    borderRadius: 12,
    marginBottom: 10,
  },
  innerCardView: {
    paddingVertical: 13,
    borderRadius: 11,
    width: screenWidth.width80,
    alignSelf: 'flex-end',
    marginVertical: 2,
    marginRight: 2,
  },
});
