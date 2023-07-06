import React from 'react';
import {
  Flex,
  Icons,
  Text,
  Button,
  StyleSheet,
  getColors,
  Status,
  ReadMoreText,
} from 'squashapps-react-native-uikit';
import ProfileWithStatus from '../../common/ProfileWithStatus';
import TitleWithValue from '../../common/TitleWithValue';
import {APP_THEME} from '../../utils/constants';

const {SvgTimePeding, SvgCalenderTick, SvgVideoCircle} = Icons;
const {NEUTRAL_500, PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  nameFLex: {
    marginBottom: 8,
  },
  nameContainer: {
    marginLeft: 20,
  },
  calenderTickContainer: {
    backgroundColor: PRIMARY_COLOR_500 + 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 5,
    marginVertical: 20,
    alignSelf: 'center',
  },
  dateText: {
    marginLeft: 8,
  },
  majorText: {
    marginBottom: 8,
  },
});

const AppointmentDetailsProfile = () => {
  const text =
    'From the information gathered in the history and examination, the following differential diagnosis can be posited.Jhon unhappy childhood.';

  return (
    <Flex>
      <Flex row center>
        <ProfileWithStatus
          height={75}
          width={75}
          borderRadius={25}
          src="https://i.ibb.co/bRbhw8R/doctor1.png"
          icon={<SvgVideoCircle />}
        />
        <Flex flex={1} overrideStyle={styles.nameContainer}>
          <Flex row center between overrideStyle={styles.nameFLex}>
            <Text type="heading600">Rahul Aravind</Text>
            <Button type="link">
              <SvgTimePeding fill="#3366FF" />
            </Button>
          </Flex>
          <Text color="gray" type="body100">
            26 Years, Male
          </Text>
        </Flex>
      </Flex>
      <Flex row center middle overrideStyle={styles.calenderTickContainer}>
        <SvgCalenderTick fill={NEUTRAL_500} />
        <Text overrideStyle={styles.dateText} type="body100">
          7 September 2021 . 08:00
        </Text>
      </Flex>
      <TitleWithValue
        title="Status :  "
        value={<Status type="rounded" label="Upcoming" color="success" />}
      />
      <TitleWithValue title="Appointment Subject : " />
      <Text type="heading400" overrideStyle={styles.majorText}>
        Major depressive disorder
      </Text>
      <ReadMoreText text={text} />
    </Flex>
  );
};

export default AppointmentDetailsProfile;
