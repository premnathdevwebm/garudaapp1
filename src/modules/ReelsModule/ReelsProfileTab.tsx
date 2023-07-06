import * as React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Flex, Text, getColors } from 'squashapps-react-native-uikit';
import { containerStyle, labelStyle, tabStyles } from '../MessageModule/tabStyle';
import SortsList from './SortsList';
import SvgSortsVideo from '../../icons/SvgSortsVideo';
import SvgSortsSave from '../../icons/SvgSortsSave';
import { APP_THEME } from '../../utils/constants';

const Tab = createMaterialTopTabNavigator();

const ReelsProfileTab = () => {
  const { PRIMARY_COLOR_500, TEXT_GREY_500 } = getColors(APP_THEME);
  return (
    <Tab.Navigator
      screenOptions={tabStyles}
      sceneContainerStyle={containerStyle}>
      <Tab.Screen
        name="Sorts"
        options={{
          tabBarLabelStyle: labelStyle,
          tabBarLabel: ({ focused }) => (
            <Flex row center>
              <View style={{ marginTop: 4, marginRight: 8 }}>
                <SvgSortsVideo
                  fill={focused ? PRIMARY_COLOR_500 : TEXT_GREY_500}
                  height={22}
                  width={22}
                />
              </View>
              <Text bold size={20} color={focused ? 'theme' : 'primary'}>
                Sorts
              </Text>
            </Flex>
          ),
        }}
        component={SortsList}
      />
      <Tab.Screen
        name="Saved"
        options={{
          tabBarLabelStyle: labelStyle,
          tabBarLabel: ({ focused }) => (
            <Flex row center>
              <View style={{ marginTop: 4, marginRight: 8 }}>
                <SvgSortsSave
                  fill={focused ? PRIMARY_COLOR_500 : TEXT_GREY_500}
                  height={18}
                  width={20}
                />
              </View>
              <Text bold size={20} color={focused ? 'theme' : 'primary'}>
                Saved
              </Text>
            </Flex>
          ),
        }}
        component={SortsList}
      />
    </Tab.Navigator>
  );
};

export default ReelsProfileTab;
