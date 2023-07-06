import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Colors} from 'squashapps-react-native-uikit';
import ProfileScreen from '../modules/ProfileModule/ProfileScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.WHITE},
      }}
      initialRouteName='ProfileScreen'>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
