import React, { useState, useEffect } from 'react';
import { Body, Card, CardItem, H3 } from 'native-base';
import { View, Text, StyleSheet } from 'react-native';
import { getGameDetails } from '../services';
import { Rating } from 'react-native-ratings';
import GalleryHeader from '../components/GalleryHeader';
import FullScreenLoader from '../components/FullScreenLoader';

const GameDetails = (props) => {
  const [game, setGame] = useState(null);
  const [showMore, toggleShowMore] = useState(false);
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
    return <FullScreenLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <GalleryHeader items={separateImagesAndVideos()} />
      </View>
      <View style={styles.body}>
        <Card style={styles.card}>
          <CardItem>
            <Body>
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
              <View>
                {showMore ? (
                  <Text>
                    {game.description_raw}
                    <Text
                      style={styles.showMoreText}
                      onPress={() => toggleShowMore(false)}>
                      show less
                    </Text>
                  </Text>
                ) : (
                  <Text>
                    {game.description_raw.slice(0, 160)} .....{' '}
                    <Text
                      style={styles.showMoreText}
                      onPress={() => toggleShowMore(true)}>
                      show more
                    </Text>
                  </Text>
                )}
              </View>
            </Body>
          </CardItem>
        </Card>
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
    alignItems: 'center',
  },
  card: {
    width: 350,
    marginTop: -23,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
  },
  rating: {
    flex: 1,
    height: '100%',
  },
  showMoreText: {
    color: 'blue',
  },
});

export default GameDetails;
