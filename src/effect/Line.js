import { Animated, Text, View } from 'react-native';
import React from 'react';
export const Line = (props) => {
    return (<View style={{
            width: '100%',
            justifyContent: 'center',
            marginTop: 5,
        }}>
      <Text>{props.desc}</Text>
      <Animated.View style={{
            width: 50,
            height: 30,
            marginTop: 5,
            marginLeft: props.value,
            backgroundColor: '#abc',
        }}/>
    </View>);
};
