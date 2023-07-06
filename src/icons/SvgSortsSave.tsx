/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 11,
  height: 12,
  fill: '#9E9E9E',
};
const SvgSortsSave = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 11 12">
    <Path
      fill={fill}
      d="M1.765 11.6a.66.66 0 0 1-.633-.058.622.622 0 0 1-.3-.559v-9.65c0-.366.13-.68.392-.942C1.485.13 1.799 0 2.165 0h6.667c.367 0 .68.13.942.392.261.261.392.575.391.941v9.65c0 .245-.1.431-.3.559a.658.658 0 0 1-.633.058L5.499 10l-3.734 1.6Z"
    />
  </Svg>
);

SvgSortsSave.defaultProps = defaultProps;

export default SvgSortsSave;
