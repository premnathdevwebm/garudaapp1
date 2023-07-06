import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {tabStyles, containerStyle, labelStyle} from '../MessageModule/tabStyle';
import UpcomingTab from './UpcomingTab';

const Tab = createMaterialTopTabNavigator();

const AppointmentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={tabStyles}
      sceneContainerStyle={containerStyle}>
      <Tab.Screen
        name="Upcoming"
        options={{
          tabBarLabelStyle: labelStyle,
        }}
        component={UpcomingTab}
      />
      <Tab.Screen
        name="History"
        options={{
          tabBarLabelStyle: labelStyle,
        }}
        component={UpcomingTab}
      />
    </Tab.Navigator>
  );
};

export default AppointmentTab;
