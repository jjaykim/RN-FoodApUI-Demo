import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../assets/colors/colors';
import popularData from '../assets/data/popularData';
import { Header } from '../components/header/Header';
import { SearchBar } from '../components/searchBar/SearchBar';
import { Categories } from '../components/categories/Categories';

interface HomeScreenProps {}

const HomeMainContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const HomeScreen: FunctionComponent<HomeScreenProps> = () => {
  return (
    <HomeMainContainer>
      <Header />

      {/* Title */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.subtitle}>Food</Text>
        <Text style={styles.title}>Delivery</Text>
      </View>

      {/* Serch */}
      <SearchBar />

      {/* Categories */}
      <Categories />
    </HomeMainContainer>
  );
};

const styles = StyleSheet.create({
  titlesWrapper: {
    marginTop: 30,
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: colors.textDark,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
});
