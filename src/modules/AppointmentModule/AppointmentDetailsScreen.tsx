import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  Button,
  Flex,
  Text,
  validators,
  getColors,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';
import {useLanguage} from '../../utils/useLanguage';
import AppointmentDetails from './AppointmentDetails';
import AppointmentDetailsProfile from './AppointmentDetailsProfile';
import DocumentList from './DocumentList';
import PrescriptionList from './PrescriptionList';
import RecordVitalsData from './RecordVitalsData';
import RecordVitalsPopup from './RecordVitalsPopup';

const {isEmpty} = validators;
const {THIS_FIELD_REQUIRED} = useLanguage;
const {PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
  },
  startBtn: {
    marginVertical: 16,
  },
  btnContainer: {
    marginVertical: 30,
  },
  addBtn: {
    backgroundColor: PRIMARY_COLOR_500 + 10,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 20,
  },
  prescriptionText: {
    marginBottom: 20,
  },
});

export type formType = {
  bodyTemperature: string;
  bloodPressure: string;
  bloodSugar: string;
  bodyWeight: string;
};
const initialValues: formType = {
  bodyTemperature: '',
  bloodPressure: '',
  bloodSugar: '',
  bodyWeight: '',
};

const validate = (values: formType) => {
  const errors: Partial<formType> = {};
  if (isEmpty(values.bodyTemperature)) {
    errors.bodyTemperature = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bloodPressure)) {
    errors.bloodPressure = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bloodSugar)) {
    errors.bloodSugar = THIS_FIELD_REQUIRED;
  }
  if (isEmpty(values.bodyWeight)) {
    errors.bodyWeight = THIS_FIELD_REQUIRED;
  }
  return errors;
};
const AppointmentDetailsScreen = () => {
  const [isData, setData] = useState<formType>();
  const [isAddData, setAddData] = useState(false);
  const [isView, setView] = useState(false);
  const navigation = useNavigation();
  const handleAddDataOpen = () => setAddData(true);
  const handleAddDataClose = () => setAddData(false);

  const handleSave = (values: formType) => {
    setData(values);
    handleAddDataClose();
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
    validate,
  });

  const handleFullView = () => setView(true);
  const handlePrescribe = () => {
    navigation.navigate('PrescribeMedicineScreen');
  };

  return (
    <>
      <RecordVitalsPopup
        open={isAddData}
        formik={formik}
        close={handleAddDataClose}
      />
      <ScrollView contentContainerStyle={styles.overAll} bounces={false}>
        <Flex>
          <AppointmentDetailsProfile />
          <Text type="heading500" overrideStyle={{marginTop: 20}}>
            Record Vitals:
          </Text>
          {isData && <RecordVitalsData isData={isData} />}
          <Button onClick={handleAddDataOpen} overrideStyle={styles.addBtn}>
            <Text color="theme" size={14}>
              + Add Data
            </Text>
          </Button>
          <DocumentList />
          <Button overrideStyle={styles.addBtn}>
            <Text color="theme" size={14}>
              + Add Doc
            </Text>
          </Button>
          <Text type="heading500" overrideStyle={styles.prescriptionText}>
            Prescription
          </Text>
          <PrescriptionList handleDetailedScreen={handlePrescribe} />
          <AppointmentDetails isView={isView} handleFullView={handleFullView} />
        </Flex>
        <Flex overrideStyle={styles.btnContainer}>
          <Button
            overrideStyle={styles.startBtn}
            onClick={() => {
              setView(true);
            }}>
            Start Video Call
          </Button>
          <Button type="secondary">Reschedule</Button>
        </Flex>
      </ScrollView>
    </>
  );
};

export default AppointmentDetailsScreen;
