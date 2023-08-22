import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import {Calendar} from 'react-native-calendars';
import {calendarTheme} from './calendarStyles';
import axios from 'axios';
import {BASE_URL} from '@env';
import {useAuth} from '../../contexts/AuthContext';
import moment from 'moment';
import CustomDay from './CustomDay';
import LoadingIndicator from '../LoadingIndicator';

const Box = () => {
  const {theme} = useTheme();
  const {token} = useAuth();
  const [diaries, setDiaries] = useState();
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month() + 1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getDiaries();
  }, [month]);

  function convertDiaries(diaries) {
    return diaries.reduce((acc, diary) => {
      const day = moment(diary.createdTime).format('YYYY-MM-DD');
      acc[day] = {
        ...acc[diary.day],
        objectId: diary.id,
        customStyles: customStyles,
      };
      return acc;
    }, {});
  }

  async function getDiaries() {
    try {
      const response = await axios.get(`${BASE_URL}/diaries/`, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
        params: {
          year: year,
          month: month,
        },
      });
      if (response.status === 200) {
        setDiaries(convertDiaries(response.data));
        setIsLoading(false);
      }
    } catch (err) {
      throw err;
    }
  }
  const customStyles = {
    container: {
      backgroundColor: theme.diaryBottom,
      borderRadius: 0,
    },
    text: {
      color: theme.white,
    },
  };

  const handleMonthChange = date => {
    setYear(date.year);
    setMonth(date.month);
  };

  return (
    <View style={[styles.box, {backgroundColor: theme.white}]}>
      <Calendar
        markingType={'custom'}
        markedDates={diaries}
        theme={calendarTheme}
        dayComponent={props => <CustomDay {...props} />}
        onMonthChange={date => handleMonthChange(date)}
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
  loadingBox: {
    height: 350,
  },
});
