import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import data from '../../assets/samples/report.json';
import TextComponent from '../../components/TextComponent';
import moment from 'moment';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import {BASE_URL} from '@env';
import LoadingIndicator from '../../components/LoadingIndicator';

const Report = ({route}) => {
  const {theme} = useTheme();
  const [report, setReport] = useState(data);
  const {token} = useAuth();
  const {objectId} = route.params;
  const [isLoading, setIsLoading] = useState(true);

  async function getReport() {
    try {
      const response = await axios.get(`${BASE_URL}/reports/${objectId}/`, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setIsLoading(false);
        setReport(response.data);
      }
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getReport();
  }, [objectId]);

  return (
    <SafeAreaView
      style={[styles.safeAreaView, {backgroundColor: theme.backgroundGeneral}]}>
      <TopBar name={'보이닷'} isSettings={true} isWhite={false} />
      <View style={[styles.view]}>
        {isLoading ? (
          <View style={[styles.justifyCenter]}>
            <LoadingIndicator radius={10} color={theme.textLightGrey} />
          </View>
        ) : (
          <>
            <TextComponent
              weight="bold"
              style={[styles.date, {color: theme.primary}]}>
              {moment(report.createdTime).format('YYYY.MM.DD')}
            </TextComponent>
            <TextComponent weight="bold" style={[styles.title]}>
              우리 아이 하루 요약
            </TextComponent>
            <View style={[styles.scrollView, {backgroundColor: theme.white}]}>
              <ScrollView>
                <TextComponent
                  weight="light"
                  style={[styles.text, {color: theme.textGrey}]}>
                  {report.body}
                </TextComponent>
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {
    paddingVertical: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  justifyCenter: {
    marginTop: 280,
  },
  date: {
    fontSize: 20,
    lineHeight: 24,
  },
  title: {
    marginTop: 16,
    marginBottom: 24,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.5,
  },
  scrollView: {
    width: 342,
    height: 504,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 14,
    lineHeight: 24,
  },
  button: {
    marginTop: 22,
    width: 210,
    height: 52,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
  },
});
