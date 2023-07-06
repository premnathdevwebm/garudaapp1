/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 41,
  height: 50,
  fill: '#FEFEFE',
};
const SvgPlay = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 41 50">
    <Path
      fill={fill}
      d="M6.1 49.1c-1.333.867-2.683.918-4.048.152C.687 48.487.002 47.303 0 45.7V4.3C0 2.7.684 1.516 2.052.748 3.42-.02 4.769.031 6.1.9l32.6 20.7c1.2.8 1.8 1.934 1.8 3.4 0 1.467-.6 2.6-1.8 3.4L6.1 49.1Z"
    />
  </Svg>
);

SvgPlay.defaultProps = defaultProps;

export default SvgPlay;
