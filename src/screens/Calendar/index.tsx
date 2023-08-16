import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TopBar from '../../components/TopBar';
import {useTheme} from 'react-native-paper';
import TextComponent from '../../components/Text';
import IconComponent from '../../components/Icon';
import Box from '../../components/Calendar/Box';

const Calendar = () => {
  const {colors} = useTheme();
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
          style={[styles.title, {color: colors.textNavy}]}>
          지난 일기 확인하기
        </TextComponent>
        <IconComponent type="calendar" width={66} height={66} />
        <Box />
      </View>
    </SafeAreaView>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {
    paddingVertical: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
    marginBottom: 24,
  },
});
