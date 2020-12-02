import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { getGameDetails } from '../services';

const GameDetails = (props) => {
  const [game, setGame] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [updatedName, setUpdatedName] = useState(null);
  const [error, setError] = useState(false);
  const [toggleFetch, toogleFetchAgain] = useState(false);

  useEffect(() => {
    const {
      route: {
        params: { id, updatedName: name },
      },
    } = props;
    setGameId(id);
    setUpdatedName(name);
    getGameDetails({ id })
      .then((gameData) => {
        setGame(gameData);
      })
      .catch((err) => {
        console.log('GameDetails -> err', err);
        setError(true);
      });
  }, [props, toggleFetch]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Something went wrong!</Text>
        <TouchableOpacity
          onPress={() => {
            setError(false);
            toogleFetchAgain(!toggleFetch);
          }}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>{'Try Again'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {updatedName !== undefined ? updatedName : game?.name}
        </Text>
        {game?.background_image !== undefined ? (
          <>
            <Image
              style={styles.gameImage}
              source={{
                uri: game?.background_image,
              }}
            />
            <TouchableOpacity
              onPress={() => props.onPressNext(gameId)}
              style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>{'Next'}</Text>
            </TouchableOpacity>
          </>
        ) : (
          <ActivityIndicator />
        )}
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
  button: {
    top: 40,
    borderWidth: 2,
  },
  appButtonContainer: {
    top: 20,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default GameDetails;
