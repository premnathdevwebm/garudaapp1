import React from 'react';
import {Flex, Icons, StyleSheet, Text} from 'squashapps-react-native-uikit';

const {SvgArrowDown, SvgBell} = Icons;
const styles = StyleSheet.create({
  heading400: {
    marginTop: 10,
  },
  overAll: {
    paddingHorizontal: 20,
  },
});
const HomeHeader = () => {
  return (
    <Flex row center between overrideStyle={styles.overAll}>
      <Flex>
        <Text type="heading600">Hi, Mrs. Doe</Text>
        <Flex row center overrideStyle={styles.heading400}>
          <Text type="heading400" color="gray">
            Branch Name{'  '}
          </Text>
          <SvgArrowDown />
        </Flex>
      </Flex>
      <SvgBell />
    </Flex>
  );
};

export default HomeHeader;
