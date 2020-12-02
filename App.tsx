import 'react-native-gesture-handler';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './src/navigation';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </ApplicationProvider>
);
