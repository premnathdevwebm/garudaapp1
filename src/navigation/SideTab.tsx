import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Colors,
  Flex,
  getColors,
  Icons,
} from 'squashapps-react-native-uikit';
import {useDispatch} from 'react-redux';
import {Image, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomStatusBar from '../common/CustomStatusBar';
import SideTabIcons from './SideTabIcons';
import {APP_THEME} from '../utils/constants';
import SvgGaruda from '../icons/SvgGaruda';
import {AppDispatch} from '../redux/store';
import {logOut} from '../modules/LoginModule/store/loginReducer';
import type {RootTabParamList} from './types';
import HomeStack from './HomeStack';
import AppointmentStack from './AppointmentStack';
import MessageStack from './MessageStack';
import ProfileStack from './ProfileStack';

const {SvgHome, SvgAppointments, SvgLogOut, SvgMessage} = Icons;
const {PRIMARY_COLOR_500, WHITE, GREY_20} = getColors(APP_THEME);

const Stack = createNativeStackNavigator<RootTabParamList>();

const styles = StyleSheet.create({
  sideBarWidth: {
    width: 100,
    backgroundColor: WHITE,
    borderRightWidth: 1,
    borderRightColor: GREY_20,
  },
  logout: {
    marginBottom: 50,
  },
  profileStyle: {
    width: 36,
    height: 36,
    borderRadius: 100,
  },
});

const SideTab = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const homeTabFoucs =
    route.params?.screen === 'HomeTab' || route.params?.screen === undefined;
  const messageTabFoucs = route.params?.screen === 'MessageTab';
  const appointmentTabFoucs = route.params?.screen === 'AppointmentTab';
  const profileTabFoucs = route.params?.screen === 'ProfileTab';
  const handleLogout = () => {
    dispatch(logOut(null));
  };

  const sideTabData = () =>
    useMemo(() => {
      return [
        {
          icon: () => (
            <SvgHome
              stroke={homeTabFoucs ? WHITE : PRIMARY_COLOR_500}
              strokeOne={homeTabFoucs ? WHITE : PRIMARY_COLOR_500}
              fill={homeTabFoucs ? PRIMARY_COLOR_500 : WHITE}
              height={36}
              width={36}
            />
          ),
          route: () => {
            navigation.navigate('BottomTab', {
              screen: 'HomeTab',
            });
          },
          focus: homeTabFoucs,
        },
        {
          icon: () => (
            <SvgMessage
              isCircle
              fill={messageTabFoucs ? PRIMARY_COLOR_500 : WHITE}
              strokeFill={messageTabFoucs ? WHITE : PRIMARY_COLOR_500}
              strokeFillOne={messageTabFoucs ? WHITE : PRIMARY_COLOR_500}
              height={36}
              width={36}
            />
          ),
          route: () => {
            navigation.navigate('BottomTab', {
              screen: 'MessageTab',
            });
          },
          focus: messageTabFoucs,
        },
        {
          icon: () => (
            <SvgAppointments
              fill={appointmentTabFoucs ? WHITE : PRIMARY_COLOR_500}
              height={36}
              width={36}
            />
          ),
          route: () => {
            navigation.navigate('BottomTab', {
              screen: 'AppointmentTab',
            });
          },
          focus: appointmentTabFoucs,
        },
        {
          icon: () => (
            <Image
              style={styles.profileStyle}
              source={{uri: 'https://i.ibb.co/C687p4f/image-1460.png'}}
            />
          ),
          route: () => {
            navigation.navigate('BottomTab', {
              screen: 'ProfileTab',
            });
          },
          focus: profileTabFoucs,
        },
      ];
    }, [route.params?.screen]);

  return (
    <Flex row flex={1}>
      <Flex center overrideStyle={styles.sideBarWidth}>
        <CustomStatusBar />
        <Flex flex={1} between center>
          <SvgGaruda fill={PRIMARY_COLOR_500} />
          <Flex>
            {sideTabData().map(tabList => {
              return (
                <SideTabIcons focus={tabList.focus} onClick={tabList.route}>
                  {tabList.icon()}
                </SideTabIcons>
              );
            })}
          </Flex>
          <Flex bottom overrideStyle={styles.logout}>
            <Button type="link" onClick={handleLogout}>
              <SvgLogOut height={36} width={36} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.WHITE},
        }}
        initialRouteName="HomeTab">
        <Stack.Screen name="HomeTab" component={HomeStack} />
        <Stack.Screen name="MessageTab" component={MessageStack} />
        <Stack.Screen name="AppointmentTab" component={AppointmentStack} />
        <Stack.Screen name="ProfileTab" component={ProfileStack} />
      </Stack.Navigator>
    </Flex>
  );
};

export default SideTab;
