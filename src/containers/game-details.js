import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppRoute } from '../navigation/app-routes';
import GameDetailsScreen from '../screens/game-details';

export const GameDetailsContainer = (props) => {
  console.log('GameDetailsContainer -> props', props);
  const navigation = useNavigation();

  const handleNextPress = (id) => {
    console.log('handleNextPress -> id', id);
    navigation.navigate(AppRoute.CHANGE_DATA, { id });
  };

  return <GameDetailsScreen {...props} onPressNext={handleNextPress} />;
};
