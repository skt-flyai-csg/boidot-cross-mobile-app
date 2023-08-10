import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from './Text';

interface NavBarProps {
  handleOpenPress: () => void;
}

const NavBar: FC<NavBarProps> = ({handleOpenPress}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.view, {backgroundColor: colors.textWhite}]}>
      <View style={[styles.icon]}>
        <Icon name="home" size={24} color={colors.textNavy} />
        <TextComponent
          weight="heavy"
          style={[styles.text, {color: colors.textNavy}]}>
          홈
        </TextComponent>
      </View>
      <View style={[styles.icon]}>
        <Icon name="message-square" size={24} color={colors.textLightGrey} />
        <TextComponent
          weight="heavy"
          style={[styles.text, {color: colors.textLightGrey}]}>
          챗T
        </TextComponent>
      </View>
      <TouchableOpacity
        onPress={handleOpenPress}
        style={[styles.me, {backgroundColor: colors.backgroundHome}]}>
        <Image
          style={[styles.me]}
          source={require('../assets/images/myImage.png')}
        />
      </TouchableOpacity>
      <View style={[styles.icon]}>
        <Icon name="message-square" size={24} color={colors.textLightGrey} />
        <TextComponent
          weight="heavy"
          style={[styles.text, {color: colors.textLightGrey}]}>
          프렌즈
        </TextComponent>
      </View>
      <View style={[styles.icon]}>
        <Icon name="menu" size={24} color={colors.textLightGrey} />
        <TextComponent
          weight="heavy"
          style={[styles.text, {color: colors.textLightGrey}]}>
          메뉴
        </TextComponent>
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
    lineHeight: 12,
  },
});
