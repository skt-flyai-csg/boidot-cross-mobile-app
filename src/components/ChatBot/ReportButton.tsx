import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from '../Text';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {useBottomSheet} from '@gorhom/bottom-sheet';

interface ReportButtonProps {
  createdTime: string;
  objectId: string;
}

const ReportButton: React.FC<ReportButtonProps> = ({createdTime, objectId}) => {
  const navigation = useNavigation();
  const {close} = useBottomSheet();
  const handlePressButton = () => {
    close();
    navigation.navigate('Report', {objectId: objectId});
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: '#4561BD'}]}
      onPress={handlePressButton}>
      <TextComponent weight="bold" style={[styles.text, {color: 'white'}]}>
        {moment(createdTime).format('YYYY.MM.DD')} 활동 보고서
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
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
});
