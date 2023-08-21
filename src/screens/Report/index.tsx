import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import data from '../../assets/samples/report.json';
import TextComponent from '../../components/Text';
import moment from 'moment';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import {BASE_URL} from '@env';

const Report = ({route}) => {
  const {colors} = useTheme();
  const [report, setReport] = useState(data);
  const {token} = useAuth();
  const {objectId} = route.params;

  async function getReport() {
    try {
      const response = await axios.get(`${BASE_URL}/reports/${objectId}/`, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setReport(response.data);
      }
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    getReport();
  }, [objectId]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaView,
        {backgroundColor: colors.backgroundGeneral},
      ]}>
      <TopBar name={'보이닷'} isSettings={true} isWhite={false} />
      <View style={[styles.view]}>
        <TextComponent
          weight="bold"
          style={[styles.date, {color: colors.primary}]}>
          {moment(report.createdTime).format('YYYY.MM.DD')}
        </TextComponent>
        <TextComponent weight="bold" style={[styles.title]}>
          활동 보고서
        </TextComponent>
        <View style={[styles.scrollView, {backgroundColor: colors.textWhite}]}>
          <ScrollView>
            <TextComponent
              weight="light"
              style={[styles.text, {color: colors.textGrey}]}>
              {report.body}
            </TextComponent>
          </ScrollView>
        </View>
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
