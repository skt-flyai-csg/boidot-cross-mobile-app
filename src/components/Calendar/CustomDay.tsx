import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import TextComponent from '../TextComponent';
import {useTheme} from '../../contexts/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import {CustomDayProps, DiaryScreenProps} from '../../types';

const CustomDay = ({date, marking}: CustomDayProps) => {
  const {theme} = useTheme();
  const navigation = useNavigation<DiaryScreenProps>();
  if (!marking) {
    return (
      <View style={[styles.box, {backgroundColor: theme.white}]}>
        <TextComponent
          weight="regular"
          style={[styles.text, {color: theme.text}]}>
          {date.day}
        </TextComponent>
      </View>
    );
  }

  const handlePress = () => {
    navigation.navigate('Diary', {objectId: marking.objectId});
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.box, {backgroundColor: theme.diaryBottom}]}>
      <TextComponent
        weight="regular"
        style={[styles.text, {color: theme.white}]}>
        {date.day}
      </TextComponent>
    </TouchableOpacity>
  );
};

export default CustomDay;

const styles = StyleSheet.create({
  box: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
});
