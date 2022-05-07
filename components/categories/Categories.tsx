import React, { FunctionComponent } from 'react';
import { FlatList, Image, ImageSourcePropType, View } from 'react-native';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { categoriesData } from '../../assets/data/categoriesData';
import { CategoryType } from '../../types/CategoryType';

Feather.loadFont();

interface CategoriesProps {}

const CategoriesBox = styled.View`
  margin-top: 30px;
`;

const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 16px;
`;

export const Categories: FunctionComponent<CategoriesProps> = () => {
  const renderCategoryItem = ({ item }: { item: CategoryType }) => {
    return (
      <View>
        <Image source={item.image as ImageSourcePropType} />
        <Title>{item.title}</Title>
        <View>
          <Feather name="chevron-right" size={8} />
        </View>
      </View>
    );
  };

  return (
    <CategoriesBox>
      <Title>Categories</Title>

      <View>
        <FlatList
          data={categoriesData}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          horizontal
        />
      </View>
    </CategoriesBox>
  );
};
