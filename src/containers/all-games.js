import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppRoute } from '../navigation/app-routes';
import AllGamesScreen from '../screens/all-games';
import { getAllGames } from '../services';

export const AllGamesContainer = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    getAllGames()
      .then((gamesData) => {
        setGames(gamesData?.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log('AllGamesContainer -> err', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const gameId = props.route.params?.gameId;
    const updatedName = props.route.params?.updatedName;
    const cpy = [...games];
    let updatedGames = cpy.map((game) => {
      if (game.id === gameId) {
        game.name = updatedName;
      }
      return game;
    });
    setGames(updatedGames);
  }, [props]);

  const handleGamePress = (id) => {
    navigation.navigate(AppRoute.GAME_DETAILS, { id });
  };

  return (
    <AllGamesScreen
      loading={loading}
      games={games}
      onPressGame={handleGamePress}
    />
  );
};
