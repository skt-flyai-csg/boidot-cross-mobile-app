import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import TextComponent from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';
import IconComponent from '../../components/Icon';
import NeedCard from '../../components/Main/NeedCard';
import Box from '../../components/Main/Box';

const Menu = () => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={[
        styles.SafeAreaView,
        {backgroundColor: colors.backgroundGeneral},
      ]}>
      <TopBar name={'메뉴'} isSettings={true} isWhite={false} />
      <ScrollView style={[styles.view]}>
        <View style={[styles.profile, {backgroundColor: colors.secondary}]}>
          <View style={[styles.row, styles.info]}>
            <Image
              style={[styles.img]}
              source={require('../../assets/images/myImage.png')}
            />
            <View style={[styles.gap8]}>
              <View style={[styles.row, styles.gap12]}>
                <TextComponent
                  weight="extraBold"
                  style={[{color: colors.textWhite}]}>
                  에이닷
                </TextComponent>
                <View
                  style={[styles.detail, {backgroundColor: colors.textGrey}]}>
                  <Icon
                    name="chevron-right"
                    size={16}
                    color={colors.textLightGrey}
                  />
                </View>
              </View>
              <View style={[styles.row, styles.status]}>
                <View style={[styles.row, styles.val]}>
                  <IconComponent type="star" width={14} height={16} />
                  <TextComponent
                    weight="bold"
                    style={[styles.statusText, {color: colors.textWhite}]}>
                    0
                  </TextComponent>
                </View>
                <View style={[styles.row, styles.val]}>
                  <IconComponent type="heart" width={20} height={16} />
                  <TextComponent
                    weight="bold"
                    style={[styles.statusText, {color: colors.textWhite}]}>
                    3,730
                  </TextComponent>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[styles.line, {backgroundColor: colors.textLightGrey}]}
          />
          <View style={[styles.row, styles.bottom]}>
            <View style={[styles.row, styles.val]}>
              <IconComponent type="notification" width={24} height={24} />
              <TextComponent
                weight="regular"
                style={[styles.bottomText, {color: colors.textWhite}]}>
                퀘스트
              </TextComponent>
            </View>
            <View style={[styles.row, styles.val]}>
              <IconComponent type="buy" width={24} height={24} />
              <TextComponent
                weight="regular"
                style={[styles.bottomText, {color: colors.textWhite}]}>
                캐릭터 스토어
              </TextComponent>
            </View>
          </View>
        </View>
        <View style={[styles.notice, {backgroundColor: colors.backgroundGrey}]}>
          <IconComponent type="volume" width={32} height={24} />
          <TextComponent weight="bold" style={[{color: colors.textGrey}]}>
            [업데이트] A. v2.0.0 업데이트 안내
          </TextComponent>
        </View>
        <View style={[styles.need]}>
          <TextComponent
            weight="heavy"
            style={[styles.needText, {color: colors.textNavy}]}>
            지금 필요한 기능
          </TextComponent>
          <View style={[styles.row, styles.justifyBetween]}>
            <NeedCard iconType="calendar" title="보이닷">
              우리 아이 하루 일과 확인하기
            </NeedCard>
            <NeedCard iconType="game" title="게임">
              지금 바로 실력 뽐내보기
            </NeedCard>
            <NeedCard iconType="tick" title="루틴">
              내 루틴 7개
            </NeedCard>
          </View>
        </View>
        <View style={[styles.help]}>
          <TextComponent
            weight="heavy"
            style={[styles.needText, {color: colors.textNavy}]}>
            일상을 돕는 기능
          </TextComponent>
          <View>
            <Box iconType="tick" title="루틴">
              내 루틴 7개
            </Box>
            <Box iconType="calendar" title="보이닷">
              우리 아이 하루 일과 확인하기
            </Box>
            <Box iconType="game" title="게임">
              지금 바로 실력 뽐내보기
            </Box>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  SafeAreaView: {flex: 1},
  row: {
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profile: {
    width: '100%',
    borderRadius: 12,
    height: 156,
    paddingHorizontal: 20,
    gap: 18,
    paddingTop: 31,
    marginTop: 12,
  },
  line: {
    width: '100%',
    height: 0.5,
  },
  img: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
  name: {
    fontSize: 16,
    lineHeight: 20,
  },
  info: {
    gap: 16,
  },
  detail: {
    width: 20,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap12: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  status: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  statusText: {
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: -0.25,
  },
  val: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  gap8: {
    gap: 8,
  },
  bottom: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  bottomText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.3,
  },
  notice: {
    flexDirection: 'row',
    marginTop: 24,
    width: '100%',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 13,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
  },
  need: {
    marginTop: 40,
    width: '100%',
    gap: 16,
  },
  needText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  help: {
    marginTop: 40,
    marginBottom: 60,
    width: '100%',
    gap: 16,
  },
});
