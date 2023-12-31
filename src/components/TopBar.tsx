import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from './TextComponent';
import {useTheme} from '../contexts/ThemeContext';
import {TopBarProps} from '../types';

const TopBar = ({isSettings, name, isWhite}: TopBarProps) => {
  const {theme} = useTheme();
  return (
    <View style={[styles.view]}>
      <TextComponent
        weight="heavy"
        style={[styles.text, {color: isWhite ? theme.white : theme.textNavy}]}>
        {name}
      </TextComponent>
      {isSettings && (
        <View style={[styles.iconBox]}>
          <Icon
            name="bell"
            size={24}
            color={isWhite ? theme.white : theme.textNavy}
          />
          <Icon
            name="settings"
            size={24}
            color={isWhite ? theme.white : theme.textNavy}
          />
        </View>
      )}
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.45,
  },
  iconBox: {
    flexDirection: 'row',
    gap: 16,
  },
});
