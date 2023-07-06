import React, { useState } from 'react';
import { Button, Colors, Flex, Text } from 'squashapps-react-native-uikit';
import Video from 'react-native-video';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgPlay from '../../icons/SvgPlay';
import SvgLike from '../../icons/SvgLike';
import SvgSave from '../../icons/SvgSave';
import SvgMyProfile from '../../icons/SvgMyProfile';

const getVideo = require('../../assets/images/sorts.mp4');

const styles = StyleSheet.create({
  overAll: {
    position: 'relative',
  },
  svgPlay: {
    position: 'absolute',
    zIndex: 99,
    top: '50%',
    left: '46%',
  },
  actionContainer: {
    position: 'absolute',
    zIndex: 99,
    bottom: 60,
    right: 8,
  },
  profileNameContainer: {
    position: 'absolute',
    zIndex: 99,
    bottom: 10,
    paddingHorizontal: 16,
  },
});

const ReelsScreen = () => {
  const [isPass, setPass] = useState(false);
  const { height, width } = useSafeAreaFrame();
  const { bottom, top } = useSafeAreaInsets();
  const [isLike, setLike] = useState(false);
  const [isSave, setSave] = useState(false);
  const navigation = useNavigation();
  const handlePass = () => {
    setPass(!isPass);
  };

  const handleLike = () => {
    setLike(!isLike);
  };
  const handleSave = () => {
    setSave(!isSave);
  };
  const handleProfileNavigate = () => {
    navigation.navigate('ReelsProfileScreen');
  };
  return (
    <Flex overrideStyle={styles.overAll}>
      <Video
        repeat
        posterResizeMode="cover"
        poster="https://i.ibb.co/FgpTDzV/photo-1526512340740-9217d0159da9.jpg"
        paused={isPass}
        fullscreen
        onTouchStart={handlePass}
        currentTime={0}
        resizeMode="cover"
        source={getVideo}
        style={{
          height: height - (bottom + top + 50),
          width,
        }}
      />
      {isPass && (
        <View style={styles.svgPlay}>
          <Button type="link" onClick={handlePass}>
            <SvgPlay />
          </Button>
        </View>
      )}
      <Flex overrideStyle={styles.actionContainer}>
        <Flex center>
          <Button type="link" onClick={handleLike}>
            <SvgLike fill={isLike ? Colors.ERROR_500 : Colors.WHITE} />
          </Button>
          <Text size={12} bold color="white" align="center">
            1.9k
          </Text>
        </Flex>
        <Flex center overrideStyle={{ marginVertical: 16 }}>
          <Button type="link" onClick={handleSave}>
            <SvgSave fill={isSave ? Colors.ERROR_500 : Colors.WHITE} />
          </Button>
          <Text bold size={12} color="white" align="center">
            Save
          </Text>
        </Flex>
        <Flex center>
          <Button type="link" onClick={handleProfileNavigate}>
            <SvgMyProfile />
          </Button>
          <Text bold size={12} color="white" align="center">
            My Profile
          </Text>
        </Flex>
      </Flex>
      <Flex overrideStyle={styles.profileNameContainer}>
        <Flex row center>
          <Image
            style={{
              width: 32,
              height: 32,
              borderRadius: 100,
            }}
            source={{ uri: 'https://i.ibb.co/C687p4f/image-1460.png' }}
          />
          <Text overrideStyle={{ marginLeft: 8 }} bold color="white">
            Amanda Sarah
          </Text>
        </Flex>
        <Text numberOfLines={1} ellipsizeMode="tail" color="white">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint...
        </Text>
      </Flex>
    </Flex>
  );
};

export default ReelsScreen;
