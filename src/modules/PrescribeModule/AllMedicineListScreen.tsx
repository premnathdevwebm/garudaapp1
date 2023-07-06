import React, {useState} from 'react';
import {useFormik} from 'formik';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Flex, StyleSheet, Colors} from 'squashapps-react-native-uikit';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../common/SearchBar';
import PrescribeMedicinePopup from './PrescribeMedicinePopUp';
import PrescriptionCard from './PrescriptionCard';

const styles = StyleSheet.create({
  overAll: {
    marginLeft: 20,
    marginTop: 24,
  },
  statusBar: {
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 16,
  },
  overAllContainer: {
    backgroundColor: Colors.WHITE,
  },
});
export type formTypePrescribe = {
  quantity: string;
  timing: string;
  order: string;
  dosage: string;
  autoReOrder: string;
};
const initialValues: formTypePrescribe = {
  quantity: '',
  timing: '',
  order: '',
  dosage: '',
  autoReOrder: '',
};
const AllMedicineListScreen = () => {
  const [isAddData, setAddData] = useState(false);
  const handleAddDataOpen = () => setAddData(true);
  const handleAddDataClose = () => setAddData(false);
  const navigation = useNavigation();

  const handleSave = () => {
    handleAddDataClose();
    navigation.navigate('PrescribeMedicineScreen');
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSave,
  });

  return (
    <>
      <PrescribeMedicinePopup
        open={isAddData}
        formik={formik}
        close={handleAddDataClose}
      />
      <Flex overrideStyle={styles.overAllContainer}>
        <Flex overrideStyle={styles.statusBar}>
          <SearchBar isFilter placeholder="Search Medicines" />
        </Flex>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={[{}, {}, {}, {}, {}, {}, {}, {}]}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={() => (
            <TouchableOpacity onPress={handleAddDataOpen}>
              <Flex overrideStyle={styles.overAll}>
                <PrescriptionCard imageHeight={50} imageWidth={50} />
              </Flex>
            </TouchableOpacity>
          )}
          ListFooterComponent={<View style={{height: 100}} />}
        />
      </Flex>
    </>
  );
};
export default AllMedicineListScreen;
