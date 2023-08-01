import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import IconComponent from '../Icon';
import TextComponent from '../Text';

interface BoxProps {
  iconType: 'calendar' | 'game' | 'tick';
  title: string;
  children: ReactNode;
}
const Box: React.FC<BoxProps> = ({iconType, title, children}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.box, {backgroundColor: colors.textWhite}]}>
      <IconComponent type={iconType} width={28} height={28} />
      <View style={[styles.textBox]}>
        <TextComponent
          weight="bold"
          style={[styles.titleText, {color: colors.textNavy}]}>
          {title}
        </TextComponent>
        <TextComponent
          weight="light"
          style={[styles.descText, {color: colors.textGrey}]}>
          {children}
        </TextComponent>
      </View>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 76,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  textBox: {
    gap: 14,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 16,
  },
  descText: {
    height: 14,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: -0.25,
  },
});
