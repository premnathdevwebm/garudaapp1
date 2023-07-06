/* eslint max-len: ["error", { "code": 4000 }] */
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const defaultProps = {
  width: 31,
  height: 30,
  fill: '#36F',
};
const SvgEditSquare = ({width, height, fill}: typeof defaultProps) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 31 30">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21.332 2.513a6.654 6.654 0 0 1 4.907 1.736 6.726 6.726 0 0 1 1.748 4.92V20.83a6.716 6.716 0 0 1-1.735 4.92 6.683 6.683 0 0 1-4.92 1.736H9.669a6.665 6.665 0 0 1-4.92-1.736 6.665 6.665 0 0 1-1.736-4.92V9.17a6.665 6.665 0 0 1 1.736-4.92 6.665 6.665 0 0 1 4.92-1.736h11.663Zm-7.106 18.543 8.404-8.429a1.982 1.982 0 0 0 0-2.784L21.007 8.22a1.975 1.975 0 0 0-2.797 0l-.837.849a.332.332 0 0 0 0 .462s1.986 1.973 2.023 2.023c.137.15.225.35.225.574 0 .45-.362.824-.824.824a.784.784 0 0 1-.55-.225l-2.085-2.072c-.1-.1-.275-.1-.375 0L9.831 16.61c-.412.412-.65.961-.662 1.548l-.075 2.96c0 .162.05.312.163.424a.595.595 0 0 0 .424.175h2.935c.599 0 1.173-.237 1.61-.662Z"
      clipRule="evenodd"
    />
  </Svg>
);

SvgEditSquare.defaultProps = defaultProps;

export default SvgEditSquare;
