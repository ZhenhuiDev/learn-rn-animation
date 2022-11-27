import {Animated, Easing, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

interface IProps {
  started: boolean;
}

export const TimingAnimation = (props: IProps) => {
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

interface ILineProps {
  desc: string;
  value: AnimatedInterpolation<number | string>;
}

const Line = (props: ILineProps) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
      }}>
      <Text style={{width: 100}}>{props.desc}</Text>
      <Animated.View
        style={{
          width: 50,
          height: 30,
          marginLeft: props.value,
          backgroundColor: '#abc',
        }}
      />
    </View>
  );
};