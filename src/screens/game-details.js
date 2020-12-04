import React, { useState, useEffect } from 'react';
import { Body, Button, Card, CardItem, H3, Icon } from 'native-base';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getGameDetails } from '../services';
import { Rating } from 'react-native-ratings';
import Modal from 'react-native-modal';
import Video from 'react-native-video';
import FullScreenLoader from '../components/FullScreenLoader';

const GameDetails = (props) => {
  const [game, setGame] = useState(null);
  const [showMore, toggleShowMore] = useState(false);
  const [showTrailer, toggleTrailer] = useState(false);
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

  if (!game) {
    return <FullScreenLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: game.background_image }} style={styles.image} />
        <Button
          style={styles.trailerBtn}
          iconLeft
          light
          onPress={() => toggleTrailer(!showTrailer)}>
          <Text style={styles.buttonTxt}>Watch Trailer</Text>
          <Icon name={'play'} style={styles.buttonTxt} />
        </Button>
        <View style={styles.overlay} />
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
      <Modal isVisible={showTrailer}>
        <View style={styles.modalBody}>
          <Card>
            <CardItem>
              <Body>
                <Video source={{ uri: game.clip.clip }} style={styles.video} />
                <Button onPress={() => toggleTrailer(false)}>
                  <Text style={styles.buttonTxt}>Close</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  header: {
    flexBasis: '30%',
    position: 'relative',
  },
  image: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.3,
  },
  trailerBtn: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    zIndex: 1,
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
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
  modalBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  video: {
    width: 500,
    height: 200,
  },
});

export default GameDetails;
