import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Routes from './src/routes';
import AlertProvider from './src/contexts/Alerts';
import AuthProvider from './src/contexts/Authentication';

import { useFonts } from 'expo-font';

import InArea from './src/routes/inArea';
import OutArea from './src/routes/outArea';

import Notifications from "./src/contexts/Notifications"

import { AuthContext } from './src/contexts/Authentication';

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
            <Area />
          </Notifications>
        </AuthProvider>
      </AlertProvider>
    </NavigationContainer>
  )
}


const Area = () => {
  const { authToken } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    setIsLoggedIn(authToken != null);
  }, [authToken])

  return (
    <>
      {
              isLoggedIn? 
                <InArea/>: <OutArea/>
            }
    </>
  );
}