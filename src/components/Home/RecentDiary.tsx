import React, {useState} from 'react';
import data from '../../assets/samples/diary.json';
import TextComponent from '../Text';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import {useTheme} from 'react-native-paper';

const RecentDiary = () => {
  const [diary, setDiary] = useState(data);
  const {colors} = useTheme();
  return (
    <View>
      <TextComponent
        weight="regular"
        style={[styles.date, {color: colors.primary}]}>
        [{moment(diary.createdTime).format('YYYY.MM.DD')}]
      </TextComponent>
      <TextComponent
        weight="light"
        style={[styles.body, {color: colors.textGrey}]}
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
