/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 27,
  height: 28,
  fill: '#FEFEFE',
};
const SvgRoundPlay = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} viewBox="0 0 27 28">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M.68 14.008C.68 6.648 6.584.667 13.834.667s13.154 5.981 13.154 13.34c0 7.345-5.904 13.326-13.154 13.326S.68 21.352.68 14.008Zm17.979 1.35c.14-.142.317-.361.355-.412.203-.27.305-.605.305-.938a1.64 1.64 0 0 0-.33-1.005l-.098-.106a11.454 11.454 0 0 0-.321-.344c-1.041-1.132-3.758-2.985-5.18-3.55-.216-.09-.762-.284-1.054-.296-.28 0-.546.064-.8.193-.318.18-.572.463-.711.797-.09.232-.229.926-.229.94-.14.758-.216 1.993-.216 3.357 0 1.3.076 2.482.19 3.254.004.003.015.059.032.144.051.261.159.804.273 1.027.28.54.826.875 1.41.875h.05c.381-.013 1.181-.348 1.181-.36 1.346-.567 4-2.329 5.066-3.5l.077-.077Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgRoundPlay.defaultProps = defaultProps;

export default SvgRoundPlay;
