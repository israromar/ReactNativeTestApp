/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const AllGames = ({ loading, games, onPressGame }) => {
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {games.map((game) => (
        <TouchableOpacity
          key={game.id}
          style={styles.table}
          onPress={() => onPressGame(game.id)}>
          <Text style={{ textAlign: 'center' }}>{game?.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    margin: 10,
    maxHeight: 500,
    alignItems: 'flex-start',
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    top: 120,
    padding: 20,
    marginLeft: 5,
    width: 100,
    height: 'auto',
    backgroundColor: 'skyblue',
    borderWidth: 0.4,
  },
});

export default AllGames;
