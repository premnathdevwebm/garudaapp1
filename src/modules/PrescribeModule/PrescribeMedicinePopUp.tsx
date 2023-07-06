import {FormikProps} from 'formik';
import React from 'react';
import {
  Flex,
  Modal,
  StyleSheet,
  Text,
  Colors,
  Button,
  ButtonGroup,
  Icons,
  LabelWrapper,
} from 'squashapps-react-native-uikit';
import {autoReOrder, dosage, order, qunatity, timing} from './mock';
import {formTypePrescribe} from './AllMedicineListScreen';
import PrescriptionCard from './PrescriptionCard';

const {SvgClose} = Icons;
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
  inputMarignBottom: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 24,
  },
  saveBtn: {
    marginTop: 12,
  },
  prescriptionCard: {
    marginTop: 30,
    marginBottom: 42,
  },
});

type Props = {
  formik: FormikProps<formTypePrescribe>;
  open: boolean;
  close: () => void;
};

const PrescribeMedicinePopup = ({formik, open, close}: Props) => {
  return (
    <Modal isVisible={open}>
      <Flex overrideStyle={styles.overAll}>
        <Flex row center between overrideStyle={styles.title}>
          <Text align="center" type="heading500">
            Medication Instructions
          </Text>
          <Button onClick={close} type="link">
            <SvgClose />
          </Button>
        </Flex>
        <Text color="gray">Provide Instructions to consume medicine</Text>
        <Flex overrideStyle={styles.prescriptionCard}>
          <PrescriptionCard imageHeight={50} imageWidth={50} />
        </Flex>
        <Flex overrideStyle={styles.inputMarignBottom}>
          <LabelWrapper label="Quantity">
            <ButtonGroup
              buttons={qunatity}
              onChange={formik.handleChange('quantity')}
            />
          </LabelWrapper>
        </Flex>
        <Flex overrideStyle={styles.inputMarignBottom}>
          <LabelWrapper label="Timing">
            <ButtonGroup
              buttons={timing}
              onChange={formik.handleChange('timing')}
            />
          </LabelWrapper>
        </Flex>
        <Flex overrideStyle={styles.inputMarignBottom}>
          <LabelWrapper label="Order">
            <ButtonGroup
              buttons={order}
              onChange={formik.handleChange('order')}
            />
          </LabelWrapper>
        </Flex>
        <Flex overrideStyle={styles.inputMarignBottom}>
          <LabelWrapper label="Dosage">
            <ButtonGroup
              buttons={dosage}
              onChange={formik.handleChange('dosage')}
            />
          </LabelWrapper>
        </Flex>
        <Flex overrideStyle={styles.inputMarignBottom}>
          <LabelWrapper label="Allow Auto Re-order">
            <ButtonGroup
              buttons={autoReOrder}
              onChange={formik.handleChange('autoReOrder')}
            />
          </LabelWrapper>
        </Flex>
        <Button onClick={formik.handleSubmit} overrideStyle={styles.saveBtn}>
          Prescribe
        </Button>
      </Flex>
    </Modal>
  );
};

export default PrescribeMedicinePopup;
