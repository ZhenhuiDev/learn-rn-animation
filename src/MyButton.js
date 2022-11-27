import { Button, View } from 'react-native';
import React from 'react';
export const MyButton = (props) => {
    return (<View style={{
            borderRadius: 5,
            backgroundColor: '#1c75ff',
            marginHorizontal: 10,
            paddingHorizontal: 10,
        }}>
      <Button title={props.title} color={'white'} onPress={props.onPress}/>
    </View>);
};
