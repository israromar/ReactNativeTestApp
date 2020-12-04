import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AllGames, GameDetails, ChangeData } from '../containers';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoute.ALL_GAMES} headerMode="none">
      <Stack.Screen name={AppRoute.ALL_GAMES} component={AllGames} />
      <Stack.Screen name={AppRoute.GAME_DETAILS} component={GameDetails} />
      <Stack.Screen name={AppRoute.CHANGE_DATA} component={ChangeData} />
    </Stack.Navigator>
  );
};
