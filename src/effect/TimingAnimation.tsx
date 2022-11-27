import {Animated, Easing, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import { Line } from './Line';
import { AnimationProps } from '../ShowAnimatedAnimation';

export const TimingAnimation = (props: AnimationProps) => {
  const animatedMarginLeft1 = useRef(new Animated.Value(10)).current;
  const animatedMarginLeft2 = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    if (props.started) {
      Animated.timing(animatedMarginLeft1, {
        toValue: 100,
        easing: Easing.linear,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(animatedMarginLeft2, {
        toValue: 100,
        easing: Easing.cubic,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      animatedMarginLeft1.setValue(10);
      animatedMarginLeft2.setValue(10);
    }
  }, [props.started]);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Line desc={'Easing.linear: '} value={animatedMarginLeft1} />
      <Line desc={'Easing.cubic: '} value={animatedMarginLeft2} />
    </View>
  );
};
