// import Snackbar from 'react-native-snackbar';
// import {Alert, Platform} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import {images} from '../config/Constant';
// import Toast from 'react-native-simple-toast';

// export function showSnack(message) {
//   Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
//   // setTimeout(() => {
//   //   Snackbar.show({
//   //     text: message,
//   //     duration: Snackbar.LENGTH_LONG,
//   //   });
//   // }, 500);
// }
// export function convertUnixIntoTime(unixDate) {
//   var date = unixDate;
//   var time = new Date(date);

//   var hours = time.getHours();
//   var minutes = time.getMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   var formattedTime = hours + ':' + minutes + '' + ampm;

//   var month = time.getMonth() + 1;
//   const formattedDate = month + '/' + time.getDate() + '/' + time.getFullYear();
//   return formattedDate + ' ' + formattedTime;
// }
// export async function saveSession(user, data) {
//   try {
//     await AsyncStorage.setItem(user, JSON.stringify(data));
//     console.log('USER SAVED', JSON.stringify(data));
//     // }, 1000);
//   } catch (error) {
//     // Error saving data
//     console.log('error', error);
//   }
// }
// export function getConversationId(currentUserId, chatUserId) {
//   if (currentUserId < chatUserId) {
//     return currentUserId + '_' + chatUserId;
//   } else {
//     return chatUserId + '_' + currentUserId;
//   }
// }
// export function showAlert(title, message) {
//   var result = Alert.alert(
//     title,
//     message,
//     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
//     {cancelable: false},
//   );
//   return result;
// }
// export function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }

// export function convertToTime(unixDate) {
//   var date = unixDate * 1000;
//   var time = new Date(date);

//   var hours = time.getUTCHours();
//   var minutes = time.getUTCMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   var formattedTime = hours + ':' + minutes + '' + ampm;
//   return formattedTime;
// }

// export function getWeekName(value) {
//   var index = value - 1;
//   const array = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//   const day = array[index];
//   return day;
// }

// export function getCurrentDate() {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = yyyy + '-' + mm + '-' + dd;
//   return today;
// }

// //number to string time
// export function numToTimeString(num) {
//   var num = new Date(num * 1000);
//   var hours = num.getHours();
//   var minutes = num.getMinutes();
//   var ampm = hours >= 12 ? 'pm' : 'am';
//   hours = hours % 12;
//   hours = hours ? hours : 12; // the hour '0' should be '12'
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   var str = hours + ':' + minutes + ' ' + ampm;
//   return str;
// }

// //number to string date
// export function numToDateString(num) {
//   var num = new Date(num * 1000);
//   var d = num.getDate();
//   var m = months[num.getMonth()];
//   var y = num.getYear();
//   var str = d + ' ' + m;
//   return str;
// }

// export function getDateFromUnix(unixDate) {
//   var today = new Date(unixDate * 1000);
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = yyyy + '-' + mm + '-' + dd;
//   return today;
// }

// export function getDateInGerman(unixDate) {
//   var today = new Date(unixDate * 1000);
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = dd + '.' + mm + '.' + yyyy;
//   return today;
// }

// export function formateDate(date) {
//   var today = new Date(date);
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = dd + '.' + mm + '.' + yyyy;
//   return today;
// }

// export function getRandomLoader() {
//   const types = [
//     // 'CircleFlip',
//     // 'Bounce',
//     // 'Wave',
//     // 'WanderingCubes',
//     // 'Pulse',
//     // 'ChasingDots',
//     // 'ThreeBounce',
//     // 'Circle',
//     // '9CubeGrid',
//     // 'WordPress',
//     // 'FadingCircle',
//     'FadingCircleAlt',
//     // 'Arc',
//     // 'ArcAlt',
//   ];
//   const random = Math.floor(Math.random() * types.length);
//   const loader = types[random];
//   return loader;
// }
