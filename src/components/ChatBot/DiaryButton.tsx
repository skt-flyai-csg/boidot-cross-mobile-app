import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import TextComponent from '../TextComponent';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useBottomSheet} from '@gorhom/bottom-sheet';
import {ChatButtonProps, DiaryScreenProps} from '../../types';

const DiaryButton = ({diary}: ChatButtonProps) => {
  const {theme} = useTheme();
  const navigation = useNavigation<DiaryScreenProps>();
  const {close} = useBottomSheet();
  const handlePressButton = () => {
    close();
    navigation.navigate('Diary', {objectId: diary.objectId});
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: theme.diaryTop}]}
      onPress={handlePressButton}>
      <TextComponent weight="bold" style={[{color: theme.white}]}>
        {moment(diary.createdTime).format('YYYY.MM.DD')}&nbsp; 우리 아이 일기
      </TextComponent>
    </TouchableOpacity>
  );
};

export default DiaryButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
