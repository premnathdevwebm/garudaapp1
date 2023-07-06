import React from 'react';
import { Flex } from 'squashapps-react-native-uikit';
import { FlatList } from 'react-native';
import { sortList } from './mock';
import SortsCard from './SortsCard';

const SortsList = () => {
  const formatData = (data: any[], numColumns: number) => {
    const numberOfFullRow = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRow * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({ empty: true });
      numberOfElementsLastRow += 1;
    }
    return data;
  };
  return (
    <Flex>
      <FlatList
        numColumns={3}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={formatData(sortList, 3)}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) => <SortsCard index={index} item={item} />}
      />
    </Flex>
  );
};

export default SortsList;
