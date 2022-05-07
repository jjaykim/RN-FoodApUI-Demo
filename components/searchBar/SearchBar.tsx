import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../assets/colors/colors';

Feather.loadFont();

interface SearchBarProps {}

const SearchBarContainer = styled.View`
  flex-direction: row;
  margin-top: 36px;
  align-items: center;
`;

const SearchBarBox = styled.View`
  flex: 1;
  margin-left: 10px;
  border-bottom-color: ${colors.textLight};
  border-bottom-width: 2px;
`;

const SearchBarText = styled.TextInput`
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  margin-bottom: 5px;
  color: ${colors.textDark};
`;

export const SearchBar: FunctionComponent<SearchBarProps> = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchBarContainer>
      <Feather name="search" size={16} color={colors.textDark} />
      <SearchBarBox>
        <SearchBarText
          placeholder="Searched..."
          placeholderTextColor={colors.textLight}
          value={searchText}
          onChangeText={setSearchText}
        />
      </SearchBarBox>
    </SearchBarContainer>
  );
};
