import React from 'react';
import {FlatList, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  Card,
  Flex,
  getColors,
  Icons,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';
import AppointmentInnerListCard from './AppointmentInnerListCard';
import {appointmentData} from './mock';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);
const {SvgCalenderTick, SvgClock, SvgVideoCircle} = Icons;

const styles = StyleSheet.create({
  overAll: {
    backgroundColor: PRIMARY_COLOR_500,
    borderRadius: 24,
    padding: 20,
    marginRight: 24,
  },
  dateText: {
    marginLeft: 12,
  },
  clockConatiner: {
    marginTop: 10,
  },
  inlineCard: {
    paddingRight: 24,
    paddingLeft: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  nameContainer: {
    marginLeft: 10,
  },
  cardListContainer: {
    marginTop: 20,
  },
});

const AppointmentsCard = () => {
  const {width} = useSafeAreaFrame();
  return (
    <Card
      align="stretch"
      overrideStyle={[styles.overAll, {width: width * 0.8}]}>
      <Flex>
        <Flex row between>
          <Flex between>
            <Flex row center>
              <SvgCalenderTick />
              <Text
                overrideStyle={styles.dateText}
                type="heading500"
                color="white">
                7 October 2021
              </Text>
            </Flex>
            <Flex row center overrideStyle={styles.clockConatiner}>
              <SvgClock />
              <Text
                overrideStyle={styles.dateText}
                type="heading500"
                color="white">
                08:00 AM -10:00 AM
              </Text>
            </Flex>
          </Flex>
          <SvgVideoCircle height={28} width={28} fill={PRIMARY_COLOR_500} />
        </Flex>
        <View style={styles.cardListContainer}>
          <FlatList
            bounces={false}
            data={appointmentData}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={({item, index}) => (
              <AppointmentInnerListCard
                totalLength={appointmentData.length}
                index={index}
                item={item}
              />
            )}
          />
        </View>
      </Flex>
    </Card>
  );
};

export default AppointmentsCard;
