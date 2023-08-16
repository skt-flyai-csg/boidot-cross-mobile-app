import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Calendar} from 'react-native-calendars';
import {theme} from './calendarStyles';

const Box = () => {
  const {colors} = useTheme();
  const customStyles = {
    container: {
      backgroundColor: colors.backgroundHome,
      borderRadius: 0,
    },
    text: {
      color: colors.textNormal,
    },
  };
  return (
    <View style={[styles.box, {backgroundColor: colors.textWhite}]}>
      <Calendar
        markingType={'custom'}
        markedDates={{
          '2023-08-12': {customStyles: customStyles},
          '2023-08-16': {customStyles: customStyles},
        }}
        theme={theme}
      />
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    marginTop: 30,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
});
