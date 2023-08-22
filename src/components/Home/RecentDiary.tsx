import React, {useState} from 'react';
import data from '../../assets/samples/diary.json';
import TextComponent from '../TextComponent';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import {useTheme} from '../../contexts/ThemeContext';

const RecentDiary = () => {
  const [diary, setDiary] = useState(data);
  const {theme} = useTheme();
  return (
    <View>
      <TextComponent
        weight="regular"
        style={[styles.date, {color: theme.primary}]}>
        [{moment(diary.createdTime).format('YYYY.MM.DD')}]
      </TextComponent>
      <TextComponent
        weight="light"
        style={[styles.body, {color: theme.textGrey}]}
        numberOfLines={5}
        ellipsizeMode="tail">
        {diary.body}
      </TextComponent>
    </View>
  );
};

export default RecentDiary;

const styles = StyleSheet.create({
  date: {
    fontSize: 12,
    lineHeight: 24,
    marginTop: 10,
  },
  body: {
    fontSize: 12,
    lineHeight: 24,
    marginTop: 10,
  },
});
