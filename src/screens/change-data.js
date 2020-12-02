import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ChangeData = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrap}>
        <TouchableOpacity
          onPress={() =>
            onButtonPress('ALL_GAMES', 'UPDATED_VALUE_FROM_3RD_SCREEN')
          }
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Change In 1st Screen'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            onButtonPress('GAME_DETAILS', 'UPDATED_VALUE_FROM_3RD_SCREEN')
          }
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Change In 2nd Screen'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  gameImage: {
    width: 350,
    height: 350,
  },
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: 200,
  },
  appButtonContainer: {
    margin: 10,
    height: 70,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default ChangeData;
