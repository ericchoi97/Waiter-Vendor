import {StyleSheet, Dimensions} from 'react-native';
import {colors, fontSet} from '../../config/Constant';

export default StyleSheet.create({
  text6: {
    fontSize: 6,
  },
  text7: {
    fontSize: 7,
  },
  text8: {
    fontSize: 8,
  },
  text9: {
    fontSize: 9,
  },
  text10: {
    fontSize: 10,
  },
  text11: {
    fontSize: 11,
  },
  text12: {
    fontSize: 12,
  },
  text14: {
    fontSize: 14,
  },
  text15: {
    fontSize: 15,
  },
  text16: {
    fontSize: 16,
  },
  text18: {
    fontSize: 18,
  },
  text20: {
    fontSize: 20,
  },
  text22: {
    fontSize: 22,
  },
  text23: {
    fontSize: 23,
  },
  text24: {
    fontSize: 24,
  },
  text25: {
    fontSize: 25,
  },
  text26: {
    fontSize: 26,
  },
  text27: {
    fontSize: 27,
    lineHeight: 33,
  },
  text30: {
    fontSize: 30,
  },
  letterSpace: {
    letterSpacing: 1,
  },

  justify: {
    textAlign: 'justify',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  lineHeight10: {
    lineHeight: 10,
  },
  lineHeight15: {
    lineHeight: 15,
  },
  lineHeight16: {
    lineHeight: 16,
  },
  lineHeight20: {
    lineHeight: 20,
  },
  lineHeight22: {
    lineHeight: 22,
  },
  lineHeight25: {
    lineHeight: 25,
  },
  lineHeight30: {
    lineHeight: 30,
  },
  lineHeight33: {
    lineHeight: 33,
  },
  lineHeight17: {
    lineHeight: 17,
  },
  lineHeight19: {
    lineHeight: 19,
  },
  letterSpacing1: {
    letterSpacing: 1,
  },
  letterSpacing2: {
    letterSpacing: 2,
  },
  letterSpacing3: {
    letterSpacing: 3,
  },
  letterSpacingN1: {
    letterSpacing: -1,
  },
  letterSpacingN2: {
    letterSpacing: -2,
  },
  letterSpacingN3: {
    letterSpacing: -3,
  },

  medium: {
    fontFamily: 'Poppins-Medium',
  },

  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  extraBold: {
    fontFamily: 'Poppins-ExtraBold',
  },
  popinsLight: {
    fontFamily: 'Poppins-Light',
  },

  h1: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
    lineHeight: 24,
  },
  h2: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
    lineHeight: 22,
  },

  h3: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
    lineHeight: 20,
  },
  h4: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
  h5: {
    fontSize: fontSet.xsmall,
    fontFamily: 'Poppins-Regular',
    color: colors.greyDark,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    letterSpacing: -1,
    lineHeight: 20,
  },
  paragraphRegular: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    letterSpacing: -1,
    lineHeight: 20,
  },
  textShadow: {
    textShadowColor: '#000',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
  },
  genderLabel: {
    fontSize: fontSet.small,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  linkDescription: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  title: {
    fontSize: fontSet.middle,
    fontFamily: 'Poppins-Bold',
    color: colors.themeDefault,
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 1,
  },

  //fontFamilies
  PoppinsRegular: {
    fontFamily: 'Poppins-Regular',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
  italic: {
    fontFamily: 'Poppins-Italic',
  },

  //font colors
  white: {
    color: colors.white,
  },
  greyDark: {
    color: colors.greyDark,
  },
  black: {
    color: colors.black,
  },
  light: {
    color: colors.greyDark,
  },
  skyBlue: {
    color: colors.skyBlue,
  },
  green: {
    color: colors.green,
  },
  orange: {
    color: colors.orange,
  },
  themeDefault: {
    color: colors.themeDefault,
  },
  vendorTheme: {
    color: colors.blue,
  },
  themeSecondary: {
    color: colors.themeSecondary,
  },
  required: {
    color: colors.red,
  },
  capital: {
    textTransform: 'uppercase',
  },
  dark: {
    color: '#474747',
  },
  darkPlus: {
    color: '#767474',
  },
  tabInActiveColor: {
    color: 'rgba(37, 37, 61, 0.4)',
  },
  placeholderColor: {
    color: '#8F9BB3',
  },
});
