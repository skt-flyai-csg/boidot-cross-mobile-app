import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useTheme} from 'react-native-paper';
import TextComponent from './Text';

interface DiaryButtonProps {
  name: string;
  date: string;
}

const DiaryButton: React.FC<DiaryButtonProps> = ({name, date}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.backgroundHome}]}>
      <TextComponent weight="bold">
        {date}&nbsp;
        {name}이의 하루 보러가기
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
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});
