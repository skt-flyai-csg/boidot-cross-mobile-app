import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from './Text';

interface TopBarProps {
  isSettings: boolean;
  name: string;
}

const TopBar: FC<TopBarProps> = ({isSettings, name}) => {
  return (
    <View style={[styles.view]}>
      <TextComponent weight="heavy" style={[styles.text]}>
        {name}
      </TextComponent>
      {isSettings && (
        <View style={[styles.iconBox]}>
          <Icon name="bell" size={24} />
          <Icon name="settings" size={24} />
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
