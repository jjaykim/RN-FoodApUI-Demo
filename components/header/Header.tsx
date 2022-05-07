import React, { FunctionComponent } from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { colors } from '../../assets/colors/colors';

Feather.loadFont();

interface HeaderProps {}

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <SafeAreaView>
      <HeaderContainer>
        <ProfileImage source={require('../../assets/images/emoji.png')} />

        <Feather name="menu" size={24} color={colors.textDark} />
      </HeaderContainer>
    </SafeAreaView>
  );
};
