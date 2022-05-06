import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { useFonts } from './hooks/useFonts';

const MainContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const isLoaded = useFonts();

  if (!isLoaded) return null;

  return (
    <MainContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </MainContainer>
  );
}
