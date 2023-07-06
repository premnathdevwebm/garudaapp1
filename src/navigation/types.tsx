/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import {StackNavigationProp} from '@react-navigation/stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  HomeScreen: undefined;
  BottomTab: {
    screen?: any;
    params?: any;
  };
  MessageScreen: undefined;
  ProfileScreen: undefined;
  AppointmentsScreen: undefined;
  ChatScreen: undefined;
  AppointmentDetailsScreen: undefined;
  PrescribeMedicineScreen: undefined;
  AllMedicineListScreen: undefined;
  ReelsScreen: undefined;
  ReelsProfileScreen: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  onBoardingScreen: undefined;
  SignUpScreen: undefined;
  OTPVerificationScreen: undefined;
};

export type RootTabParamList = {
  HomeTab: undefined;
  MessageTab: undefined;
  AppointmentTab: undefined;
  ProfileTab: undefined;
  ReelsTab: undefined;
};

export type ProfileScreenNavigationProp =
  StackNavigationProp<RootStackParamList>;

export type AuthScreenNavigationProp = StackNavigationProp<AuthStackParamList>;
