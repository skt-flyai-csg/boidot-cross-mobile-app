import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import Card from '../../components/Home/Card';
import TextComponent from '../../components/Text';
import RecentDiary from '../../components/Home/RecentDiary';

const Home = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[styles.SafeAreaView, {backgroundColor: colors.backgroundHome}]}>
      <TopBar name={'에이닷'} isSettings={false} />
      <View style={[styles.View, styles.justifyBetween]}>
        <TextComponent weight="heavy" style={[styles.text]}>
          날씨 맑고 미세먼지 괜찮아! 즐거운 하루 시작! 🌤️
        </TextComponent>
        <Image
          style={[styles.character]}
          source={require('../../assets/images/myImage.png')}
        />
      </View>
      <ScrollView
        style={[
          styles.ScrollView,
          {backgroundColor: colors.backgroundGeneral},
        ]}>
        <Card name="오늘 날씨" isDetail={true}>
          <Image
            style={[styles.weather]}
            source={require('../../assets/images/weather.png')}
          />
        </Card>
        <Card name="지난 우리 아이 일기" isDetail={true}>
          <RecentDiary />
        </Card>
        <Card name="인기 Youtube" isDetail={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  View: {width: '100%', height: 136, padding: 24},
  justifyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ScrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 20,
  },
  text: {
    width: 200,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.45,
  },
  weather: {
    width: 200,
    height: 130,
  },
  character: {
    width: 125,
    height: 125,
  },
});
