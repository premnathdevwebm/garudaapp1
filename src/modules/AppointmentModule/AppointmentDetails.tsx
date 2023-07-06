import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Flex, Text, StyleSheet, Button} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';

const styles = StyleSheet.create({
  detailsText: {
    marginBottom: 20,
  },
  viewmoreBtn: {
    marginTop: 16,
    marginBottom: 20,
  },
  linearContaier: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

type Props = {
  isView: boolean;
  handleFullView: () => void;
};

const AppointmentDetails = ({handleFullView, isView}: Props) => {
  return (
    <Flex overrideStyle={{position: 'relative'}}>
      <Text type="heading500" overrideStyle={styles.detailsText}>
        Appointment Details :
      </Text>
      <TitleWithValue
        between
        title="Appointment ID"
        titleColor="gray"
        titleSize="body200"
        value="#232121234"
      />
      <TitleWithValue
        between
        title="Appointment via"
        titleColor="gray"
        titleSize="body200"
        value="Mobile App"
      />
      <TitleWithValue
        between
        title="Package"
        titleColor="gray"
        titleSize="body200"
        value="Premium"
      />
      {isView ? (
        <>
          <TitleWithValue
            between
            title="Duration"
            titleColor="gray"
            titleSize="body200"
            value="30 Minutes"
          />
          <TitleWithValue
            between
            title="Payment Mode"
            titleColor="gray"
            titleSize="body200"
            value="UPI"
          />
          <TitleWithValue
            between
            title="Total"
            titleColor="gray"
            titleSize="body200"
            value="₹ 10 "
          />
        </>
      ) : (
        <LinearGradient
          colors={['#FFF', 'rgba(255, 255, 255, 0.58) 208.3%)']}
          locations={[0, 0.5]}
          style={styles.linearContaier}>
          <Button
            type="link"
            onClick={handleFullView}
            overrideStyle={styles.viewmoreBtn}>
            <Text color="theme">View More</Text>
          </Button>
        </LinearGradient>
      )}
    </Flex>
  );
};

export default AppointmentDetails;
