import React from 'react';
import {View} from 'react-native';
import {
  Colors,
  Flex,
  Image,
  StyleSheet,
  Text,
  Icons,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';

const {SvgTrash} = Icons;
const styles = StyleSheet.create({
  flexRight: {
    marginLeft: 8,
  },
  flexRightList: {
    marginLeft: 24,
  },
  circule: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: Colors.TEXT_GREY_500,
    marginHorizontal: 6,
  },
  des: {
    marginBottom: 10,
  },
  desList: {
    marginBottom: 2,
  },
});

type Props = {
  isTime?: Boolean;
  imageHeight?: number;
  imageWidth?: number;
};

const PrescriptionCard = ({
  isTime,
  imageHeight = 70,
  imageWidth = 70,
}: Props) => {
  const desStyle = isTime ? styles.des : styles.desList;

  const marginStyle = isTime ? styles.flexRight : styles.flexRightList;
  return (
    <Flex row between>
      <Flex middle>
        <Image
          src="https://i.ibb.co/C687p4f/image-1460.png"
          height={imageHeight}
          width={imageWidth}
        />
      </Flex>
      <Flex flex={1} overrideStyle={marginStyle}>
        <TitleWithValue
          titleSize="heading400"
          between
          title="Losartan 200MG CAP"
          value={isTime && <SvgTrash />}
        />
        <Flex row center overrideStyle={desStyle}>
          <Text color="gray" type="body100">
            Sun Pharma
          </Text>
          <View style={styles.circule} />
          <Text color="gray" type="body100">
            1 Strip (10 tablets)
          </Text>
        </Flex>
        {isTime && (
          <>
            <TitleWithValue
              marginBottom={5}
              valueColor="gray"
              valueSize="body100"
              titleSize="body100"
              title="Timings : "
              value="08:00 AM, 12:00 PM, 08:00 PM"
            />

            <Flex row center>
              <TitleWithValue
                marginBottom={0}
                valueColor="gray"
                valueSize="body100"
                titleSize="body100"
                title="Dosage : "
                value="1 Tablet  "
              />
              <TitleWithValue
                marginBottom={0}
                valueColor="gray"
                valueSize="body100"
                titleSize="body100"
                title="Order : "
                value="After food"
              />
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default PrescriptionCard;
