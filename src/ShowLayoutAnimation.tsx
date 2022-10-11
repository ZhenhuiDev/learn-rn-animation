import React, {useState} from 'react';
import {Image, LayoutAnimation, View} from 'react-native';
import {MyButton} from './MyButton';

export const ShowLayoutAnimation = () => {
  const [showImg, setShowImage] = useState(false);
  const [imageSize, setImageSize] = useState(100);
  const createAnima = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      create: {type: 'easeIn', property: 'opacity'},
    });
    setShowImage(true);
  };
  const updateAnima = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: {duration: 1000, type: 'linear', property: 'scaleXY'},
    });
    setImageSize(prevSize => prevSize + 100);
  };
  const deleteAnima = () => {
    LayoutAnimation.configureNext(
      {
        duration: 500,
        delete: {type: 'easeOut', property: 'opacity'},
      },
      () => setImageSize(100),
    );
    setShowImage(false);
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {showImg && (
        <Image
          style={{width: imageSize, height: imageSize}}
          source={require('../assets/react-icon.png')}
          resizeMode={'contain'}
        />
      )}

      <View style={{position: 'absolute', bottom: 30, flexDirection: 'row'}}>
        <MyButton title={'create'} onPress={createAnima} />
        <MyButton title={'update'} onPress={updateAnima} />
        <MyButton title={'delete'} onPress={deleteAnima} />
      </View>
    </View>
  );
};
