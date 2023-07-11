import React from 'react';
import {withNavigation} from 'react-navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {colors, images, hitArea} from '../../config/Constant';

const LeftComponent = props => {
  return (
    <TouchableOpacity
      style={{justifyContent: 'center', flex: 1, paddingRight: 20}}
      hitSlop={hitArea.hitArea}
      onPress={() => props.navigation.goBack()}>
      <Image
        style={{
          resizeMode: 'contain',
          width: 10,
          height: 16,
          alignSelf: 'center',
          tintColor: props.themeLight == true ? colors.white : colors.black,
        }}
        source={images.back}
      />
    </TouchableOpacity>
  );
};

export default withNavigation(LeftComponent);
