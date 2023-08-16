import React, {FC, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from './Text';
import {useNavigation} from '@react-navigation/native';

interface NavBarProps {
  handleOpenPress: () => void;
}

const NavBar: FC<NavBarProps> = ({handleOpenPress}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [currentScreen, setCurrentScreen] = useState('Home');

  return (
    <View style={[styles.view, {backgroundColor: colors.textWhite}]}>
      <TouchableOpacity
        style={[styles.icon]}
        onPress={() => {
          navigation.navigate('Home' as never);
          setCurrentScreen('Home');
        }}>
        <Icon
          name="home"
          size={24}
          color={
            currentScreen === 'Home' ? colors.textNavy : colors.textLightGrey
          }
        />
        <TextComponent
          weight="heavy"
          style={[
            styles.text,
            {
              color:
                currentScreen === 'Home'
                  ? colors.textNavy
                  : colors.textLightGrey,
            },
          ]}>
          홈
        </TextComponent>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.icon]}
        onPress={() => {
          navigation.navigate('ChatT' as never);
          setCurrentScreen('ChatT');
        }}>
        <Icon
          name="message-square"
          size={24}
          color={
            currentScreen === 'ChatT' ? colors.textNavy : colors.textLightGrey
          }
        />
        <TextComponent
          weight="heavy"
          style={[
            styles.text,
            {
              color:
                currentScreen === 'ChatT'
                  ? colors.textNavy
                  : colors.textLightGrey,
            },
          ]}>
          챗T
        </TextComponent>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleOpenPress}
        style={[styles.me, {backgroundColor: colors.backgroundHome}]}>
        <Image
          style={[styles.me]}
          source={require('../assets/images/myImage.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.icon]}
        onPress={() => {
          navigation.navigate('Calendar' as never);
          setCurrentScreen('Calendar');
        }}>
        <Icon
          name="eye"
          size={24}
          color={
            currentScreen === 'Calendar'
              ? colors.textNavy
              : colors.textLightGrey
          }
        />
        <TextComponent
          weight="heavy"
          style={[
            styles.text,
            {
              color:
                currentScreen === 'Calendar'
                  ? colors.textNavy
                  : colors.textLightGrey,
            },
          ]}>
          보이닷
        </TextComponent>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.icon]}
        onPress={() => {
          navigation.navigate('Menu' as never);
          setCurrentScreen('Menu');
        }}>
        <Icon
          name="menu"
          size={24}
          color={
            currentScreen === 'Menu' ? colors.textNavy : colors.textLightGrey
          }
        />
        <TextComponent
          weight="heavy"
          style={[
            styles.text,
            {
              color:
                currentScreen === 'Menu'
                  ? colors.textNavy
                  : colors.textLightGrey,
            },
          ]}>
          메뉴
        </TextComponent>
      </TouchableOpacity>
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
