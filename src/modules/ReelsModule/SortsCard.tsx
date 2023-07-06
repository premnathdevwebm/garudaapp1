import React from 'react';
import Video from 'react-native-video';
import { View, StyleSheet } from 'react-native';
import { Flex } from 'squashapps-react-native-uikit';
import SvgRoundPlay from '../../icons/SvgRoundPlay';

type Props = {
  item: {
    poster: string;
    video: any;
    empty?: boolean;
  };
  index: number;
};

const styles = StyleSheet.create({
  overAll: {
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 10,
    position: 'relative',
  },
  svgPlay: {
    position: 'absolute',
    zIndex: 99,
    top: '45%',
    left: '40%',
  },
  emptyStyle: { height: 200, width: '100%', borderRadius: 10 },
});

const SortsCard = ({ item, index }: Props) => {
  return (
    <Flex flex={1} between overrideStyle={styles.overAll}>
      {item?.empty ? (
        <View style={styles.emptyStyle} />
      ) : (
        <Flex key={index.toString()}>
          <Video
            repeat
            posterResizeMode="cover"
            poster={item.poster}
            paused
            fullscreen
            currentTime={0}
            resizeMode="cover"
            source={item.video}
            style={styles.emptyStyle}
          />
          <View style={styles.svgPlay}>
            <SvgRoundPlay />
          </View>
        </Flex>
      )}
    </Flex>
  );
};

export default SortsCard;
