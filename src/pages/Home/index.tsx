import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import Card from '../../components/Home/Card';
import MyAppText from '../../components/MyAppText';

const Home = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[styles.SafeAreaView, {backgroundColor: colors.backgroundHome}]}>
      <TopBar name={'에이닷'} isSettings={false} />
      <View style={[styles.View]}>
        <MyAppText style={[styles.text]}>
          날씨 맑고 미세먼지 괜찮아! 즐거운 하루 시작! 🌤️
        </MyAppText>
      </View>
      <ScrollView
        style={[styles.ScrollView, {backgroundColor: colors.backgroundGrey}]}>
        <Card name="오늘 날씨" isDetail={true} />
        <Card name="인기 YouTube" isDetail={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SafeAreaView: {width: '100%', height: '100%'},
  View: {width: '100%', height: 136, padding: 24},
  ScrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    width: 200,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.45,
  },
});
