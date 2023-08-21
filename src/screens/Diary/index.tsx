import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import data from '../../assets/samples/diary.json';
import TextComponent from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import axios from 'axios';
import {BASE_URL} from '@env';
import {useAuth} from '../../contexts/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import LoadingIndicator from '../../components/LoadingIndicator';

const Diary = ({route}) => {
  const {colors} = useTheme();
  const [diary, setDiary] = useState(data);
  const {token} = useAuth();
  const {objectId} = route.params;
  const [isLoading, setIsLoading] = useState(true);

  async function getDiary() {
    try {
      const response = await axios.get(`${BASE_URL}/diaries/${objectId}/`, {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        setIsLoading(false);
        setDiary(response.data);
      }
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getDiary();
  }, [objectId]);

  return (
    <LinearGradient
      colors={['#F36980', '#FEA76A']}
      style={[styles.safeAreaView]}>
      <SafeAreaView>
        <TopBar name={'보이닷'} isSettings={true} isWhite={true} />
        <View style={[styles.view]}>
          {isLoading ? (
            <View style={[styles.justifyCenter]}>
              <LoadingIndicator radius={10} color={colors.textWhite} />
            </View>
          ) : (
            <>
              <TextComponent
                weight="bold"
                style={[styles.date, {color: colors.textWhite}]}>
                {moment(diary.createdTime).format('YYYY.MM.DD')}
              </TextComponent>
              <TextComponent
                weight="extraBold"
                style={[styles.title, {color: colors.textWhite}]}>
                강아지와 놀았어요!
              </TextComponent>
              <View style={[styles.scrollView]}>
                <ScrollView contentContainerStyle={[styles.alignCenter]}>
                  <Image
                    source={require('../../assets/images/picture_diary.png')}
                  />
                  <TextComponent
                    weight="light"
                    style={[styles.text, {color: colors.textNormal}]}>
                    {diary.body}
                  </TextComponent>
                </ScrollView>
              </View>
              <TouchableOpacity
                style={[styles.button, {backgroundColor: '#F36980'}]}>
                <Icon name="calendar" color={colors.textWhite} size={20} />
                <TextComponent
                  weight="bold"
                  style={[styles.buttonText, {color: colors.textWhite}]}>
                  지난 일기 보러가기
                </TextComponent>
              </TouchableOpacity>
            </>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Diary;

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
    gap: 12,
  },
  justifyCenter: {
    marginTop: 280,
  },
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
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.5,
  },
  scrollView: {
    width: 342,
    height: 414,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 20,
    backgroundColor: '#ffffffcc',
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
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.4,
  },
});
