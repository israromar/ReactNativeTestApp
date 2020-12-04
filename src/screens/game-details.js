import React, { useState, useEffect } from 'react';
import { Container, H3 } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { getGameDetails } from '../services';
import { Rating } from 'react-native-ratings';
import GalleryHeader from '../components/GalleryHeader';

const GameDetails = (props) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const {
      route: {
        params: { id },
      },
    } = props;
    getGameDetails({ id })
      .then((gameData) => {
        console.log(gameData);
        setGame(gameData);
      })
      .catch((err) => {
        console.log('GameDetails -> err', err);
      });
  }, [props]);

  const separateImagesAndVideos = () => {
    const items = [];
    items.push({ type: 'image', source: game.background_image });
    items.push({ type: 'video', source: game.clip.clip });
    return items;
  };

  if (!game) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GalleryHeader items={separateImagesAndVideos()} />
      </View>
      <View style={styles.body}>
        <Container>
          <View style={styles.titleWrapper}>
            <H3 style={styles.title}>{game.name}</H3>
            <Rating
              style={styles.rating}
              imageSize={22}
              ratingCount={5}
              readonly={true}
              startingValue={game.rating / 2}
            />
          </View>
        </Container>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  header: {
    flexBasis: '30%',
  },
  body: {
    flex: 1,
  },
  titleWrapper: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
  },
  rating: {
    flex: 1,
    borderWidth: 1,
  },
});

export default GameDetails;
