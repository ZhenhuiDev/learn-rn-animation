import {View} from 'react-native';
import React, { useState } from 'react';
import {MyButton} from './MyButton';
import { TimingAnimation } from './effect/TimingAnimation';
import { DecayAnimation } from './effect/DecayAnimation';
import { SpringAnimation } from './effect/SpringAnimation';

export interface AnimationProps {
  started: boolean;
}

export const ShowAnimatedAnimation = () => {
  const [isStart, setStart] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/*<TimingAnimation started={isStart} />*/}
      {/*<DecayAnimation started={isStart} />*/}
      <SpringAnimation started={isStart} />
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          flexDirection: 'row',
        }}>
        <MyButton title={'start'} onPress={() => setStart(true)} />
        <MyButton title={'reset'} onPress={() => setStart(false)} />
      </View>
    </View>
  );
};
