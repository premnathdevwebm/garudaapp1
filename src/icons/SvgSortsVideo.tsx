/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 15,
  height: 10,
  fill: '#36F',
};
const SvgSortsVideo = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 15 10">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3.574 0h3.861c1.615 0 2.743 1.113 2.743 2.707v4.586C10.178 8.887 9.05 10 7.434 10h-3.86C1.958 10 .831 8.887.831 7.293V2.707C.832 1.113 1.959 0 3.574 0Zm9.23 1.586a.922.922 0 0 1 .915.043c.28.175.446.48.446.812V7.56a.953.953 0 0 1-.941.957.923.923 0 0 1-.42-.102l-.988-.498a1.082 1.082 0 0 1-.592-.972V3.055c0-.414.227-.786.592-.97l.988-.499Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgSortsVideo.defaultProps = defaultProps;

export default SvgSortsVideo;
