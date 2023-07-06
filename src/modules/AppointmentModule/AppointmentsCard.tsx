import React from 'react';
import {
  Card,
  Flex,
  Icons,
  Status,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';
import ProfileWithStatus from '../../common/ProfileWithStatus';

const {SvgMapRound, SvgRightArrow} = Icons;

const styles = StyleSheet.create({
  profile: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
  nameContainer: {
    marginLeft: 15,
  },
  overAll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 20,
    marginTop: 1,
    marginBottom: 10,
  },
  hospitalText: {
    marginRight: 12,
  },
});

type Props = {
  handleViewCard: () => void;
};

const AppointmentsCard = ({handleViewCard}: Props) => {
  return (
    <Card
      onClick={handleViewCard}
      outline
      align="stretch"
      overrideStyle={styles.overAll}>
      <Flex row center between>
        <Flex row>
          <ProfileWithStatus
            height={75}
            width={75}
            borderRadius={100}
            src="https://i.ibb.co/bRbhw8R/doctor1.png"
            icon={<SvgMapRound />}
          />
          <Flex between overrideStyle={styles.nameContainer}>
            <Text type="heading500">Rahul Aravind</Text>
            <Flex row center>
              <Text type="body100" overrideStyle={styles.hospitalText}>
                Hospital
              </Text>
              <Status size={10} color="success" label="Upcoming" />
            </Flex>
            <Flex row center>
              <Text type="body100">13:00 - 13:30 </Text>
              <Text size={10} color="gray">
                (1 hour)
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <SvgRightArrow />
      </Flex>
    </Card>
  );
};

export default AppointmentsCard;
