import {FormikProps} from 'formik';
import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {
  Flex,
  Modal,
  StyleSheet,
  Text,
  Colors,
  Button,
  Icons,
  LabelWrapper,
  ButtonGroup,
} from 'squashapps-react-native-uikit';
import WeekCalendar from '../../packages/WeeklyCalender/WeekCalendar';
import {IS_ANDROID} from '../../utils/constants';
import {availableSolt, appointmentType} from './mock';
import {formType} from './UpcomingTab';

const {SvgClose} = Icons;
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  inputMarignBottom: {
    marginBottom: 16,
  },
  grayColor: {
    marginBottom: 30,
  },
  title: {
    marginBottom: 12,
  },
  saveBtn: {
    marginTop: 30,
  },
});

type Props = {
  formik: FormikProps<formType>;
  open: boolean;
  close: () => void;
};

const AppointmentFilterPopUp = ({formik, open, close}: Props) => {
  const behavior: any = IS_ANDROID ? '' : 'padding';
  return (
    <Modal isVisible={open}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior={behavior}>
          <ScrollView style={styles.overAll}>
            <Flex>
              <Flex row center between overrideStyle={styles.title}>
                <Text align="center" type="heading500">
                  Filter Appointments
                </Text>
                <Button onClick={close} type="link">
                  <SvgClose />
                </Button>
              </Flex>
              <Text color="gray" overrideStyle={styles.grayColor}>
                Filter Appointments based on criteria.
              </Text>

              <View style={styles.inputMarignBottom}>
                <LabelWrapper label="Appointment Type">
                  <ButtonGroup
                    onChange={formik.handleChange('appointmentType')}
                    buttons={appointmentType}
                  />
                </LabelWrapper>
              </View>
              <View style={styles.inputMarignBottom}>
                <LabelWrapper label="Choose Date">
                  <WeekCalendar
                    onDateChange={formik.handleChange('appointmentDate')}
                  />
                </LabelWrapper>
              </View>
              <View style={styles.inputMarignBottom}>
                <LabelWrapper label="Timings">
                  <ButtonGroup
                    onChange={formik.handleChange('timing')}
                    buttons={availableSolt}
                  />
                </LabelWrapper>
              </View>

              <Button
                onClick={formik.handleSubmit}
                overrideStyle={styles.saveBtn}>
                Filter
              </Button>
            </Flex>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AppointmentFilterPopUp;
