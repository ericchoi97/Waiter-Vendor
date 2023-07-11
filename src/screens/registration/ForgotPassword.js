import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import appStyle from '../../assets/styles/appStyle';
import {Header} from '../../components/Action';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[appStyle.safeContainer]}>
        {/* header */}
        <Header back shadow showTitle title={'Home'} />
      </View>
    );
  }
}
