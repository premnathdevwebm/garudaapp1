/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 40,
  height: 40,
  fill: '#010002',
};
const SvgPass = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 271.953 271.953">
    <Path
      fill={fill}
      d="M135.977 271.953c75.097 0 135.977-60.879 135.977-135.977S211.074 0 135.977 0 0 60.879 0 135.977s60.879 135.976 135.977 135.976zm0-250.197c62.979 0 114.22 51.241 114.22 114.22s-51.241 114.22-114.22 114.22-114.22-51.241-114.22-114.22 51.235-114.22 114.22-114.22z"
    />
    <Path
      fill={fill}
      d="M110.707 200.114c7.511 0 13.598-6.086 13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598-7.511 0-13.598 6.086-13.598 13.598v103.342c0 7.512 6.086 13.598 13.598 13.598zM165.097 200.114c7.511 0 13.598-6.086 13.598-13.598V83.174c0-7.511-6.086-13.598-13.598-13.598S151.5 75.663 151.5 83.174v103.342c0 7.512 6.086 13.598 13.597 13.598z"
    />
  </Svg>
);

SvgPass.defaultProps = defaultProps;

export default SvgPass;
