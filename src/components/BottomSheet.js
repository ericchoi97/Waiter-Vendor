import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../config/Constant';
import ActionSheet from 'react-native-actions-sheet';

const BottomSheet = React.forwardRef((props, ref) => {
  return (
    <View>
      <ActionSheet
        // headerAlwaysVisible={true}
        animated={props.animated}
        bounceOnOpen={true}
        elevation={10}
        statusBarTranslucent={false}
        indicatorColor={'#ccc'}
        closeOnPressBack={true}
        gestureEnabled={props.gestureEnabled}
        // initialOffsetFromBottom={0}
        openAnimationSpeed={10}
        hideUnderlay={true}
        containerStyle={[
          {
            borderRadius: 16,
            backgroundColor: props.bgColor ? props.bgColor : colors.white,
          },
        ]}
        // overlayColor={'rgba(0,0,0,0)'}

        ref={ref}>
        <View
          style={{
            paddingBottom: 25,
            paddingHorizontal: 20,
            paddingTop: 15,
          }}>
          {props.children}
        </View>
      </ActionSheet>
    </View>
  );
});

export default BottomSheet;
