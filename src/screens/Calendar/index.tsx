import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import TopBar from '../../components/TopBar';
import {useTheme} from '../../contexts/ThemeContext';
import TextComponent from '../../components/TextComponent';
import IconComponent from '../../components/Icon';
import Box from '../../components/Calendar/Box';

const Calendar = () => {
  const {theme} = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme.backgroundGeneral}]}>
      <TopBar name={'보이닷'} isSettings={true} isWhite={false} />
      <View style={[styles.view]}>
        <TextComponent
          weight="bold"
          style={[styles.title, {color: theme.textNavy}]}>
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
