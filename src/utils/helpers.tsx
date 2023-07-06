/* eslint-disable */
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {getColors, Icons} from 'squashapps-react-native-uikit';
import {APP_THEME} from './constants';

const {SvgEye} = Icons;

export const useVisibilityIcon = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisibleOne, setVisibleOne] = useState(false);
  const {PRIMARY_COLOR_500, NEUTRAL_500} = getColors(APP_THEME);

  const hanldeToggle = () => {
    setVisible(!isVisible);
  };
  const hanldeToggleOne = () => {
    setVisibleOne(!isVisibleOne);
  };
  const visibleIcon = () => {
    return (
      <TouchableOpacity
        onPress={hanldeToggle}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgEye fill={!isVisible ? NEUTRAL_500 : PRIMARY_COLOR_500} />
      </TouchableOpacity>
    );
  };
  const visibleIconOne = () => {
    return (
      <TouchableOpacity
        onPress={hanldeToggleOne}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SvgEye fill={!isVisibleOne ? NEUTRAL_500 : PRIMARY_COLOR_500} />
      </TouchableOpacity>
    );
  };

  return {visibleIcon, isVisible, visibleIconOne, isVisibleOne};
};
