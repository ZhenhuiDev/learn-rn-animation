import {Animated, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Line} from './Line';
import {AnimationProps} from '../ShowAnimatedAnimation';

export const SpringAnimation = (props: AnimationProps) => {
  const animatedMarginLeft1 = useRef(new Animated.Value(10)).current;
  const animatedMarginLeft2 = useRef(new Animated.Value(10)).current;
  const animatedMarginLeft3 = useRef(new Animated.Value(10)).current;
  const animatedMarginLeft4 = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    if (props.started) {
      Animated.spring(animatedMarginLeft1, {
        toValue: 100,
        stiffness: 100,
        damping: 10,
        mass: 1,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedMarginLeft2, {
        toValue: 100,
        stiffness: 150,
        damping: 10,
        mass: 1,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedMarginLeft3, {
        toValue: 100,
        stiffness: 100,
        damping: 20,
        mass: 1,
        useNativeDriver: false,
      }).start();
      Animated.spring(animatedMarginLeft4, {
        toValue: 100,
        stiffness: 100,
        damping: 10,
        mass: 2,
        useNativeDriver: false,
      }).start();
    } else {
      animatedMarginLeft1.setValue(10);
      animatedMarginLeft2.setValue(10);
      animatedMarginLeft3.setValue(10);
      animatedMarginLeft4.setValue(10);
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
      <Line
        desc={'stiffness: 100, damping: 10, mass: 1 '}
        value={animatedMarginLeft1}
      />
      <Line
        desc={'stiffness: 150, damping: 10, mass: 1 '}
        value={animatedMarginLeft2}
      />
      <Line
        desc={'stiffness: 100, damping: 20, mass: 1 '}
        value={animatedMarginLeft3}
      />
      <Line
        desc={'stiffness: 100, damping: 10, mass: 2 '}
        value={animatedMarginLeft4}
      />
    </View>
  );
};
