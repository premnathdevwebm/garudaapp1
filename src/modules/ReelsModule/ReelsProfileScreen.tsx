import React from 'react';
import { View } from 'react-native';
import {
  Colors,
  Flex,
  Image,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';
import SvgEditSquare from '../../icons/SvgEditSquare';
import ReelsProfileTab from './ReelsProfileTab';

const styles = StyleSheet.create({
  profile: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  editSvg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  name: {
    marginTop: 10,
    marginBottom: 4,
  },
  overAll: {
    marginTop: 20,
  },
  followersContainer: {
    paddingHorizontal: 20,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.TEXT_GREY_200,
  },
  infoContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});

const ReelsProfileScreen = () => {
  return (
    <Flex flex={1} overrideStyle={styles.overAll}>
      <Flex center>
        <Flex center overrideStyle={{ position: 'relative' }}>
          <Image
            overrideStyle={styles.profile}
            src='https://i.ibb.co/C687p4f/image-1460.png'
          />
          <View style={styles.editSvg}>
            <SvgEditSquare />
          </View>
        </Flex>
        <Text overrideStyle={styles.name} size={24} bold>
          Julia Adaline
        </Text>
        <Text size={16} bold>
          Pediatrician
        </Text>
      </Flex>
      <Flex row center middle overrideStyle={styles.infoContainer}>
        <Flex center middle overrideStyle={{ marginRight: 10 }}>
          <Text bold size={24}>
            267
          </Text>
          <Text bold color="gray">
            Posts
          </Text>
        </Flex>
        <Flex center middle overrideStyle={styles.followersContainer}>
          <Text bold size={24}>
            24,278
          </Text>
          <Text bold color="gray">
            Followers
          </Text>
        </Flex>
        <Flex center middle overrideStyle={{ marginLeft: 10 }}>
          <Text bold size={24}>
            237
          </Text>
          <Text bold color="gray">
            Following
          </Text>
        </Flex>
      </Flex>
      <ReelsProfileTab />
    </Flex>
  );
};

export default ReelsProfileScreen;
