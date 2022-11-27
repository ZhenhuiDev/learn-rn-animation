import { Animated, Text, View } from 'react-native';
import React from 'react';
import AnimatedInterpolation = Animated.AnimatedInterpolation;

interface ILineProps {
  desc: string;
  value: AnimatedInterpolation<number | string>;
}

export const Line = (props: ILineProps) => {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        marginTop: 5,
      }}>
      <Text>{props.desc}</Text>
      <Animated.View
        style={{
          width: 50,
          height: 30,
          marginTop: 5,
          marginLeft: props.value,
          backgroundColor: '#abc',
        }}
      />
    </View>
  );
};
