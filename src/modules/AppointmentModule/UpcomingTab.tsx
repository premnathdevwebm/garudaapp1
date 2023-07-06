import React, {useState} from 'react';
import {SectionList, View} from 'react-native';
import {Flex, StyleSheet, validators} from 'squashapps-react-native-uikit';
import {useNavigation} from '@react-navigation/native';
import moment, {Moment} from 'moment';
import {useFormik} from 'formik';
import SearchBar from '../../common/SearchBar';
import {appointMentList} from './mock';
import AppointmentsCard from './AppointmentsCard';
import TitleWithValue from '../../common/TitleWithValue';
import {useLanguage} from '../../utils/useLanguage';
import AppointmentFilterPopUp from './AppointmentFilterPopUp';

const {isEmpty} = validators;
const {THIS_FIELD_REQUIRED} = useLanguage;

const styles = StyleSheet.create({
  overAll: {padding: 20},
  profile: {
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  margin: {marginVertical: 10, marginHorizontal: 10},
  bottomList: {
    marginBottom: 120,
  },
});
export type formType = {
  appointmentType: string;
  date: Moment;
  timing: string;
};
const initialValues: formType = {
  appointmentType: '',
  date: moment(),
  timing: '',
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.appointmentType)) {
    errors.appointmentType = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.timing)) {
    errors.timing = THIS_FIELD_REQUIRED;
  }
  return errors;
};

const UpcomingTab = () => {
  const navigation = useNavigation();
  const [isPopUp, setPopUp] = useState<boolean>(false);
  const handleAddDataOpen = () => setPopUp(true);
  const handleAddDataClose = () => setPopUp(false);
  const [data, setData] = useState<formType>();

  const handleSave = (values: formType) => {
    setData(values);
    data && handleAddDataClose();
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
    validate,
  });

  const handleViewCard = () => {
    navigation.navigate('AppointmentDetailsScreen');
  };

  return (
    <>
      <AppointmentFilterPopUp
        open={isPopUp}
        formik={formik}
        close={handleAddDataClose}
      />
      <Flex overrideStyle={styles.overAll}>
        <Flex>
          <SearchBar
            isFilter
            onClickFilter={handleAddDataOpen}
            placeholder="Search Appointments"
          />
        </Flex>
        <SectionList
          sections={appointMentList}
          renderItem={() => (
            <AppointmentsCard handleViewCard={handleViewCard} />
          )}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({section: {title}}) => (
            <View style={styles.margin}>
              <TitleWithValue
                between
                titleColor="gray"
                titleSize="heading200"
                title={title}
              />
            </View>
          )}
          ListFooterComponent={() => <View style={styles.bottomList} />}
        />
      </Flex>
    </>
  );
};

export default UpcomingTab;
