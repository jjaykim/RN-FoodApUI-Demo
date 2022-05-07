import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useFonts } from './hooks/useFonts';
import { Navigation } from './navigation/Navigation';

const App = () => {
  const isLoaded = useFonts();

  if (!isLoaded) return null;

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
