import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import {Calendar} from 'react-native-calendars';
import {calendarTheme} from './calendarStyles';

const Box = () => {
  const {theme} = useTheme();
  const customStyles = {
    container: {
      backgroundColor: theme.diaryBottom,
      borderRadius: 0,
    },
    text: {
      color: theme.white,
    },
  };
  return (
    <View style={[styles.box, {backgroundColor: theme.white}]}>
      <Calendar
        markingType={'custom'}
        markedDates={{
          '2023-08-12': {customStyles: customStyles},
          '2023-08-16': {customStyles: customStyles},
        }}
        theme={calendarTheme}
      />
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: 300,
    marginTop: 30,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
});
