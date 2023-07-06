import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Colors, Flex, StyleSheet} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../../common/CustomStatusBar';
import TitleWithViewAll from '../../common/TitleWithViewAll';
import AppointmentsCard from './AppointmentsCard';
import HomeHeader from './HomeHeader';
import RecentReviewList from './RecentReviewList';
import StatusCard from './StatusCard';

const styles = StyleSheet.create({
  overAll: {
    paddingVertical: 30,
  },
  appointMentConatiner: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 16,
  },
  appointmentFlatList: {
    paddingHorizontal: 20,
  },
  recentReviewFlatList: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  empty: {
    width: 50,
  },
});

const HomeScreen = () => {
  return (
    <>
      <CustomStatusBar barStyle="dark-content" backgroundColor={Colors.WHITE} />
      <Flex overrideStyle={styles.overAll}>
        <HomeHeader />
        <ScrollView nestedScrollEnabled>
          <TitleWithViewAll title="Today’s Appointments" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.appointmentFlatList}
            horizontal
            data={[{}, {}]}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={() => <AppointmentsCard />}
            ListFooterComponent={<View style={styles.empty} />}
          />
          <StatusCard />
          <TitleWithViewAll viewTitle="See All" title="Recent Reviews" />
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.recentReviewFlatList}
            horizontal
            data={[{}, {}, {}]}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={() => <RecentReviewList />}
            ListFooterComponent={<View style={styles.empty} />}
          />
        </ScrollView>
      </Flex>
    </>
  );
};

export default HomeScreen;
