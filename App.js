import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import AlertProvider from './src/contexts/Alerts';
import AuthProvider from './src/contexts/Authentication';

import { useFonts } from 'expo-font';

import InArea from './src/routes/inArea';

import Notifications from "./src/contexts/Notifications"

export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Medium.ttf'),
    'WorkSans': require('./assets/fonts/WorkSans-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AlertProvider>
        <AuthProvider>
          <Notifications>
            <InArea/>
          </Notifications>
        </AuthProvider>
      </AlertProvider>
    </NavigationContainer>
  )
}