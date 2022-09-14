import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AlertProvider from './src/contexts/Alerts';
import AuthProvider from './src/contexts/Authentication';

export default function App() {
  return (
    <NavigationContainer>
      <AlertProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </AlertProvider>
    </NavigationContainer>
  )
}