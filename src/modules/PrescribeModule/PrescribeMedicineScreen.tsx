import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  Button,
  Card,
  Colors,
  Flex,
  Text,
  getColors,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';
import MedicineEmpty from './MedicineEmpty';
import PrescriptionCard from './PrescriptionCard';

const {PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  btnContainer: {
    margin: 20,
  },
  overAll: {
    backgroundColor: Colors.WHITE,
  },
  cardOverAll: {
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  addBtn: {
    backgroundColor: PRIMARY_COLOR_500 + 10,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  search: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
  },
});

const PrescribeMedicineScreen = () => {
  const navigation = useNavigation();
  const handleAddMore = () => {
    navigation.navigate('AllMedicineListScreen');
  };
  return (
    <Flex flex={1} overrideStyle={styles.overAll}>
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => (
          <Card align="stretch" overrideStyle={styles.cardOverAll}>
            <PrescriptionCard isTime />
          </Card>
        )}
        ListEmptyComponent={<MedicineEmpty />}
        ListFooterComponent={
          <Button overrideStyle={styles.addBtn} onClick={handleAddMore}>
            <Text color="theme" size={14}>
              + Add More
            </Text>
          </Button>
        }
      />
      <Flex bottom overrideStyle={styles.btnContainer}>
        <Button>Prescribe</Button>
      </Flex>
    </Flex>
  );
};

export default PrescribeMedicineScreen;
