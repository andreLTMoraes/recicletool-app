import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import AlertProvider from './src/contexts/Alerts';
import AuthProvider from './src/contexts/Authentication';

import InArea from './src/routes/inArea';

export default function App() {
  return (
    <NavigationContainer>
      <AlertProvider>
        <AuthProvider>
          <InArea/>
        </AuthProvider>
      </AlertProvider>
    </NavigationContainer>
  )
}