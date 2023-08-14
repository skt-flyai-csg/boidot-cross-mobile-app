import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import data from '../../assets/samples/diary.json';
import TextComponent from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';

const Diary = () => {
  const {colors} = useTheme();
  const [diary, setDiary] = useState(data);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaView,
        {backgroundColor: colors.backgroundGeneral},
      ]}>
      <TopBar name={'보이닷'} isSettings={true} />
      <View style={[styles.view]}>
        <TextComponent
          weight="bold"
          style={[styles.date, {color: colors.primary}]}>
          {moment(diary.createdTime).format('YYYY.MM.DD')}
        </TextComponent>
        <TextComponent weight="regular" style={[styles.title]}>
          우리 아이 하루
        </TextComponent>
        <View style={[styles.scrollView, {backgroundColor: colors.textWhite}]}>
          <ScrollView>
            <TextComponent
              weight="light"
              style={[styles.text, {color: colors.textGrey}]}>
              {diary.body}
            </TextComponent>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.primary}]}>
          <Icon name="calendar" color={colors.textWhite} size={20} />
          <TextComponent
            weight="bold"
            style={[styles.buttonText, {color: colors.textWhite}]}>
            지난 일기 보러가기
          </TextComponent>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Diary;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {
    paddingVertical: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    lineHeight: 24,
  },
  title: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  scrollView: {
    width: 342,
    height: 414,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 12,
    lineHeight: 24,
  },
  button: {
    marginTop: 22,
    width: 210,
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
  },
});
