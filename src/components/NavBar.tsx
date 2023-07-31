import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import MyAppText from './MyAppText';

const NavBar = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.view, {backgroundColor: colors.textWhite}]}>
      <View style={[styles.icon]}>
        <Icon name="home" size={24} color={colors.textNavy} />
        <MyAppText style={[styles.text, {color: colors.textNavy}]}>
          홈
        </MyAppText>
      </View>
      <View style={[styles.icon]}>
        <Icon name="message-square" size={24} color={colors.textLightGrey} />
        <MyAppText style={[styles.text, {color: colors.textLightGrey}]}>
          챗T
        </MyAppText>
      </View>
      <View style={[styles.me, {backgroundColor: colors.backgroundHome}]}>
        <Image
          style={[styles.me]}
          source={require('../assets/images/myImage.png')}
        />
      </View>
      <View style={[styles.icon]}>
        <Icon name="message-square" size={24} color={colors.textLightGrey} />
        <MyAppText style={[styles.text, {color: colors.textLightGrey}]}>
          프렌즈
        </MyAppText>
      </View>
      <View style={[styles.icon]}>
        <Icon name="menu" size={24} color={colors.textLightGrey} />
        <MyAppText style={[styles.text, {color: colors.textLightGrey}]}>
          메뉴
        </MyAppText>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  me: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  view: {
    paddingHorizontal: 24,
    paddingTop: 4,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  icon: {
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 12,
  },
});
