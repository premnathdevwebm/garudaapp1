import React, {createContext, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from 'squashapps-react-native-uikit';
import {useSelector} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {AuthStackParamList, RootStackParamList} from './types';
import {useAuth} from '../utils/authCheck';
import {RootState} from '../redux/store';
import LoginScreen from '../modules/LoginModule/LoginScreen';
import BottomTab from './BottomTab';
import SideTab from './SideTab';
import ChatScreen from '../modules/ChatModule/ChatScreen';
import PrescribeMedicineScreen from '../modules/PrescribeModule/PrescribeMedicineScreen';
import Header from './Header';
import AllMedicineListScreen from '../modules/PrescribeModule/AllMedicineListScreen';
import OnboardingScreen from '../modules/LoginModule/OnBoardingScreen';
import SignUpScreen from '../modules/LoginModule/SignUpScreen';
import OTPVerificationScreen from '../modules/LoginModule/OTPVerificationScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

type ContextPropsType = {
  logOut?: any;
  logIn?: any;
};

const AuthContext = createContext<ContextPropsType>({});

const MainNavigator = () => {
  const [isLoading, setLoading] = useState(false);
  const isTablet = DeviceInfo.isTablet();
  const {userData, isLoader} = useSelector(({userReducers}: RootState) => {
    return {
      userData: userReducers.data,
      isLoader: userReducers.isLoader,
    };
  });

  const {authContext} = useAuth(setLoading);

  if (userData?.token) {
    // setAuthorization(userData?.token);
  }

  if (isLoader || isLoading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      {userData?.isLogin ? (
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTab"
            component={isTablet ? SideTab : BottomTab}
          />
          <Stack.Screen
            options={{header: props => Header({props})}}
            name="ChatScreen"
            component={ChatScreen}
          />
          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Prescribe Medicine',
            }}
            name="PrescribeMedicineScreen"
            component={PrescribeMedicineScreen}
          />
          <Stack.Screen
            options={{
              header: props => Header({props}),
              title: 'Prescribe Medicine',
            }}
            name="AllMedicineListScreen"
            component={AllMedicineListScreen}
          />
        </Stack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="onBoardingScreen">
          <AuthStack.Screen
            options={{headerShown: false}}
            name="onBoardingScreen"
            component={OnboardingScreen}
          />

          <AuthStack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="OTPVerificationScreen"
            component={OTPVerificationScreen}
          />
        </AuthStack.Navigator>
      )}
    </AuthContext.Provider>
  );
};

export default MainNavigator;
