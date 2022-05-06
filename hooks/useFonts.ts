/* eslint-disable global-require */
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useFonts = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await Font.loadAsync({
          Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
          'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
          'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
        });
      } catch (err: any) {
        console.warn(`Error: ${err.message}`);
      } finally {
        setIsLoading(true);
      }
    };

    loadAssets();
  }, []);

  return isLoading;
};
