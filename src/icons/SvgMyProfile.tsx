/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 48,
  height: 48,
  fill: '#fff',
};

const SvgMyProfile = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 48 48">
    <Path
      fill="#000"
      fillOpacity={0.4}
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
    />
    <Path
      fill={fill}
      d="M24 24c-1.1 0-2.042-.392-2.825-1.175C20.392 22.042 20 21.1 20 20s.392-2.042 1.175-2.825C21.958 16.392 22.9 16 24 16s2.042.392 2.825 1.175C27.608 17.958 28 18.9 28 20s-.392 2.042-1.175 2.825C26.042 23.608 25.1 24 24 24Zm-8 8v-2.8c0-.567.146-1.088.438-1.563.292-.475.68-.838 1.162-1.087a14.865 14.865 0 0 1 3.15-1.163A13.703 13.703 0 0 1 24 25c1.1 0 2.183.13 3.25.388a14.9 14.9 0 0 1 3.15 1.162c.483.25.871.613 1.163 1.088.292.475.438.996.437 1.562V32H16Z"
    />
  </Svg>
);

SvgMyProfile.defaultProps = defaultProps;

export default SvgMyProfile;
