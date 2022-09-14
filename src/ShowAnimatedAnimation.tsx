import {Animated, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

export const ShowAnimatedAnimation = () => {
  const [animatedValue] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [animatedValue]);
  return (
    <Animated.Image
      style={{...styles.imageStyle, opacity: animatedValue}}
      source={require('../assets/react-icon.png')}
      resizeMode={'center'}
    />
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
  },
});
