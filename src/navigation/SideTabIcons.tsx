import React, {ReactChild} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {getColors} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../utils/constants';

type Props = {
  children: ReactChild;
  onClick: () => void;
  focus: boolean;
};
const {PRIMARY_COLOR_500, TRANSPARENT} = getColors(APP_THEME);

const SideTabIcons = ({children, onClick, focus}: Props) => {
  const styles = StyleSheet.create({
    overAll: {
      backgroundColor: focus ? PRIMARY_COLOR_500 : TRANSPARENT,
      padding: 16,
      borderRadius: 8,
      marginBottom: 40,
    },
  });
  return (
    <TouchableOpacity style={styles.overAll} onPress={onClick}>
      {children}
    </TouchableOpacity>
  );
};

export default SideTabIcons;
