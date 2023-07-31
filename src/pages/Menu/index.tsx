import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../../components/TopBar';
import {Image, StyleSheet, View} from 'react-native';
import NavBar from '../../components/NavBar';
import {Text, useTheme} from 'react-native-paper';
import TextComponent from '../../components/Text';
import Icon from 'react-native-vector-icons/Feather';

const Menu = () => {
  const {colors} = useTheme();
  return (
    <>
      <SafeAreaView
        style={[
          styles.SafeAreaView,
          {backgroundColor: colors.backgroundGeneral},
        ]}>
        <TopBar name={'메뉴'} isSettings={true} />
        <View style={[styles.view]}>
          <View style={[styles.profile, {backgroundColor: colors.secondary}]}>
            <View style={[styles.row, styles.info]}>
              <Image
                style={[styles.img]}
                source={require('../../assets/images/myImage.png')}
              />
              <View style={[styles.row, styles.gap12]}>
                <TextComponent
                  weight="heavy"
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
            </View>
            <View
              style={[styles.line, {backgroundColor: colors.textLightGrey}]}
            />
            <View></View>
          </View>
        </View>
      </SafeAreaView>
      <NavBar />
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  SafeAreaView: {width: '100%', height: '100%'},
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    gap: 21,
    paddingTop: 31,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
