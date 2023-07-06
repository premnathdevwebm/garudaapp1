/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 48,
  height: 48,
  fill: '#FC4444',
};
const SvgLike = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 48 48">
    <Path
      fill="#000"
      fillOpacity={0.4}
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m24 33-8.153-7.76C14.656 24.109 14 22.6 14 20.993c0-1.607.656-3.116 1.847-4.25 2.22-2.113 5.705-2.303 8.153-.573 2.448-1.73 5.933-1.54 8.153.573C33.344 17.876 34 19.385 34 20.992c0 1.607-.656 3.116-1.847 4.249L24 33Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgLike.defaultProps = defaultProps;

export default SvgLike;
