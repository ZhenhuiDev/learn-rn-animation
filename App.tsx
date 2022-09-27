import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ShowAnimatedAnimation} from './src/ShowAnimatedAnimation';
import {ShowLayoutAnimation} from './src/ShowLayoutAnimation';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <ShowLayoutAnimation />
        {/*<ShowAnimatedAnimation />*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
