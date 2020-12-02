import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppRoute } from '../navigation/app-routes';
import ChangeDataScreen from '../screens/change-data';

export const ChangeDataContainer = (props) => {
  console.log('ChangeDataContainer -> props', props);
  const navigation = useNavigation();

  const handleButtonPress = (screen, value) => {
    navigation.navigate(AppRoute[screen], {
      updatedName: value,
      gameId: props?.route?.params?.id,
    });
  };

  return <ChangeDataScreen onButtonPress={handleButtonPress} />;
};
