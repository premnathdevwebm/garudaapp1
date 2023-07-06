import React, {useState} from 'react';
import {
  Flex,
  Text,
  Image,
  getColors,
  StyleSheet,
  Status,
  Button,
  Switch,
} from 'squashapps-react-native-uikit';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import CustomStatusBar from '../../common/CustomStatusBar';
import LogoHeader from '../../common/LogoHeader';
import {APP_THEME} from '../../utils/constants';
import {AppDispatch} from '../../redux/store';
import TitleWithValue from '../../common/TitleWithValue';
import {logOut} from '../LoginModule/store/loginReducer';
import {profileData as item} from './mock';

const {PRIMARY_COLOR_50} = getColors(APP_THEME);

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR_50,
    marginTop: 20,
    marginBottom: 30,
  },
  nameContainer: {
    marginLeft: 24,
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  btnStyle: {
    marginTop: 30,
    marginBottom: 40,
  },
  mainContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  profileContainer: {
    marginBottom: 30,
  },
});

const ProfileScreen = () => {
  const isTablet = DeviceInfo.isTablet();
  const dispatch: AppDispatch = useDispatch();
  const [notification, setNotification] = useState(item.notification);
  const handleNotification = () => {
    setNotification(!notification);
  };
  const handleLogout = () => {
    dispatch(logOut(null));
  };
  return (
    <>
      <CustomStatusBar barStyle="dark-content" />
      <Flex flex={1}>
        <LogoHeader title="Profile" />
        <Flex overrideStyle={styles.mainContainer}>
          <Flex row overrideStyle={styles.profileContainer}>
            <Image src={item.profile} overrideStyle={styles.profileImg} />
            <Flex middle overrideStyle={styles.nameContainer}>
              <Text type="heading600">{item.name}</Text>
              <Text type="heading200" color="gray">
                Edit Profile
              </Text>
            </Flex>
          </Flex>
          <TitleWithValue
            between
            title="Set Availability"
            value={<Status color="theme" label={item.availability} size={10} />}
          />
          <View style={styles.borderBottom} />
          <TitleWithValue
            between
            title="Notification"
            value={
              <Switch checked={notification} onClick={handleNotification} />
            }
          />
          <View style={styles.borderBottom} />
          <TitleWithValue
            between
            title="Change Language"
            value={
              <Text color="theme" type="heading200">
                {item.language}
              </Text>
            }
          />
        </Flex>
        {!isTablet && (
          <Flex flex={1} bottom overrideStyle={styles.mainContainer}>
            <Button
              onClick={handleLogout}
              type="secondary"
              overrideStyle={styles.btnStyle}>
              Logout
            </Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default ProfileScreen;
