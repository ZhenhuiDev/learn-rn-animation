import {Animated, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MyButton} from './MyButton';

export const ShowAnimatedAnimation = () => {
  const startAnimation = () => {

  };

  const reset = () => {

  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 100, height: 100}}
        source={require('../assets/react-icon.png')}
        resizeMode={'contain'}
      />

      <View style={{position: 'absolute', bottom: 30, flexDirection: 'row'}}>
        <MyButton title={'start'} onPress={startAnimation} />
        <MyButton title={'reset'} onPress={reset} />
      </View>
    </View>
  );
};
