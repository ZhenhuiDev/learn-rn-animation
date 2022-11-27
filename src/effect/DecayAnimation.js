import { Animated, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Line } from './Line';
export const DecayAnimation = (props) => {
    const animatedMarginLeft1 = useRef(new Animated.Value(10)).current;
    const animatedMarginLeft2 = useRef(new Animated.Value(10)).current;
    const animatedMarginLeft3 = useRef(new Animated.Value(10)).current;
    useEffect(() => {
        if (props.started) {
            Animated.decay(animatedMarginLeft1, {
                velocity: 3,
                deceleration: 0.96,
                useNativeDriver: false,
            }).start();
            Animated.decay(animatedMarginLeft2, {
                velocity: 3,
                deceleration: 0.98,
                useNativeDriver: false,
            }).start();
            Animated.decay(animatedMarginLeft3, {
                velocity: 6,
                deceleration: 0.98,
                useNativeDriver: false,
            }).start();
        }
        else {
            animatedMarginLeft1.setValue(10);
            animatedMarginLeft2.setValue(10);
            animatedMarginLeft3.setValue(10);
        }
    }, [props.started]);
    return (<View style={{
            flex: 1,
            width: '100%',
            marginLeft: 10,
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
      <Line desc={'velocity: 3, deceleration: 0.96 '} value={animatedMarginLeft1}/>
      <Line desc={'velocity: 3, deceleration: 0.98 '} value={animatedMarginLeft2}/>
      <Line desc={'velocity: 6, deceleration: 0.98 '} value={animatedMarginLeft3}/>
    </View>);
};
