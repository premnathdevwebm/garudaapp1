import {
  Card,
  Flex,
  Button,
  StyleSheet,
  getColors,
} from 'squashapps-react-native-uikit';
import React from 'react';
import {View} from 'react-native';
import {APP_THEME} from '../../utils/constants';
import {sampleTablet} from './mock';
import PrescriptionCard from '../PrescribeModule/PrescriptionCard';

const {SUCCESS_500} = getColors(APP_THEME);
const styles = StyleSheet.create({
  overAllCard: {
    borderLeftWidth: 8,
    borderRadius: 12,
    borderLeftColor: SUCCESS_500,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginHorizontal: 1,
  },
  bottomContainer: {
    marginVertical: 16,
  },
  listContainer: {
    marginBottom: 16,
  },
});

type Props = {
  handleDetailedScreen: () => void;
};
const PrescriptionList = ({handleDetailedScreen}: Props) => {
  return (
    <Card align="stretch" overrideStyle={styles.overAllCard}>
      <Flex>
        {sampleTablet.map(_item => {
          return (
            <View style={styles.listContainer} key={_item.id}>
              <PrescriptionCard imageHeight={40} imageWidth={40} />
            </View>
          );
        })}
        <Flex center overrideStyle={styles.bottomContainer}>
          <Button type="link" onClick={handleDetailedScreen}>
            View Detailed Prescription
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
export default PrescriptionList;
