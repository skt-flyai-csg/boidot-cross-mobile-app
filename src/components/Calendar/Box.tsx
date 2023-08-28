import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import {Calendar, DateData} from 'react-native-calendars';
import {calendarTheme} from '../../styles/calendarStyles';
import axios from 'axios';
import {BASE_URL} from '@env';
import {useAuth} from '../../contexts/AuthContext';
import moment from 'moment';
import CustomDay from './CustomDay';
import {BoxProps} from '../../types';

const CustomDayComponent = (props: any) => <CustomDay {...props} />;

const Box = ({setIsLoading}: BoxProps) => {
  const {theme} = useTheme();
  const {token} = useAuth();
  const [diaries, setDiaries] = useState();
  const [year, setYear] = useState(moment().year());
  const [month, setMonth] = useState(moment().month() + 1);

  const convertDiaries = useCallback(
    (_diaries: any[]) => {
      const customStyles = {
        container: {
          backgroundColor: theme.diaryBottom,
          borderRadius: 0,
        },
        text: {
          color: theme.white,
        },
      };
      return _diaries.reduce((acc, diary) => {
        const day = moment(diary.createdTime).format('YYYY-MM-DD');
        acc[day] = {
          ...acc[diary.day],
          objectId: diary.id,
          customStyles: customStyles,
        };

        return acc;
      }, {});
    },
    [theme],
  );

  const getDiaries = useCallback(async () => {
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
  }, [year, month, convertDiaries, setIsLoading, token]);

  useEffect(() => {
    const fetchDiaries = async () => {
      setIsLoading(true);
      await getDiaries();
    };

    fetchDiaries();
  }, [month, getDiaries, setIsLoading]);

  const handleMonthChange = (date: DateData) => {
    setYear(date.year);
    setMonth(date.month);
  };

  return (
    <View style={[styles.box, {backgroundColor: theme.white}]}>
      <Calendar
        markingType={'custom'}
        markedDates={diaries}
        theme={calendarTheme}
        dayComponent={CustomDayComponent}
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
