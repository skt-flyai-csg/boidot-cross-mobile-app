import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import TextComponent from '../Text';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useBottomSheet} from '@gorhom/bottom-sheet';

interface DiaryButtonProps {
  diary: {
    createdTime: string;
    objectId: string;
  };
}

const DiaryButton: React.FC<DiaryButtonProps> = ({diary}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  const {close} = useBottomSheet();
  const handlePressButton = () => {
    close();
    navigation.navigate('Diary', {objectId: diary.objectId});
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: '#F36980'}]}
      onPress={handlePressButton}>
      <TextComponent weight="bold" style={[{color: colors.textWhite}]}>
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
    borderWidth: 1,
    borderColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
