import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from './Text';
import {useTheme} from 'react-native-paper';

interface TopBarProps {
  isSettings: boolean;
  name: string;
  isWhite: boolean;
}

const TopBar: FC<TopBarProps> = ({isSettings, name, isWhite}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.view]}>
      <TextComponent
        weight="heavy"
        style={[
          styles.text,
          {color: isWhite ? colors.textWhite : colors.textNavy},
        ]}>
        {name}
      </TextComponent>
      {isSettings && (
        <View style={[styles.iconBox]}>
          <Icon
            name="bell"
            size={24}
            color={isWhite ? colors.textWhite : colors.textNavy}
          />
          <Icon
            name="settings"
            size={24}
            color={isWhite ? colors.textWhite : colors.textNavy}
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
