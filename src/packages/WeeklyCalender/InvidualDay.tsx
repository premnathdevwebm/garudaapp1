import React, {useCallback} from 'react';
import {Moment} from 'moment';
import {
  Card,
  Colors,
  Flex,
  StyleSheet,
  Text,
} from 'squashapps-react-native-uikit';

const styles = StyleSheet.create({
  dayCard: {
    marginHorizontal: 8,
    marginVertical: 4,
    paddingVertical: 12,
    borderRadius: 20,
    width: 60,
    height: 72,
  },
  day: {
    backgroundColor: Colors.WHITE,
  },
  selectedDay: {
    backgroundColor: Colors.NEUTRAL_500,
  },
  textDate: {
    marginTop: 12,
  },
});
interface DayProps {
  date: Moment;
  selectedDate: Moment;
  setSelectedDate: (args: Moment) => void;
  onChange: (args: string) => void;
}
const IndividualDay = ({
  date,
  selectedDate,
  setSelectedDate,
  onChange,
}: DayProps) => {
  const handleDatePress = useCallback(() => {
    setSelectedDate(date);
    onChange(date.toString());
  }, []);
  const isSelected = selectedDate.isSame(date, 'day');
  const fontColor = isSelected ? 'white' : 'black';
  const cardStyle = isSelected ? styles.selectedDay : styles.day;

  return (
    <Card overrideStyle={[styles.dayCard, cardStyle]} onClick={handleDatePress}>
      <Flex center>
        <Text color={fontColor}>{date.format('ddd')}</Text>
        <Text color={fontColor} overrideStyle={styles.textDate} size={22}>
          {date.format('D')}
        </Text>
      </Flex>
    </Card>
  );
};

export default IndividualDay;
