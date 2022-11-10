import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Routes from './src/routes';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar translucent={false} style="light" />
    </>
  );
}
