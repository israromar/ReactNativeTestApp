import { Spinner, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

function FullScreenLoader() {
  return (
    <View style={styles.root}>
      <Spinner color={'red'} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FullScreenLoader;
