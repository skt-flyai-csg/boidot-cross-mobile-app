import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from '../TextComponent';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useBottomSheet} from '@gorhom/bottom-sheet';
import {useTheme} from '../../contexts/ThemeContext';
import {ReportButtonProps, ReportScreenProps} from '../../types';

const ReportButton = ({report}: ReportButtonProps) => {
  const navigation = useNavigation<ReportScreenProps>();
  const {close} = useBottomSheet();
  const {theme} = useTheme();
  const handlePressButton = () => {
    close();
    navigation.navigate('Report', {objectId: report.objectId});
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: theme.backgroundHome}]}
      onPress={handlePressButton}>
      <TextComponent weight="bold" style={[styles.text, {color: theme.text}]}>
        {moment(report.createdTime).format('YYYY.MM.DD')} 하루 요약
      </TextComponent>
    </TouchableOpacity>
  );
};

export default ReportButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
});
