import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import IconComponent from '../Icon';
import TextComponent from '../Text';

interface NeedCardProps {
  iconType: 'calendar' | 'game' | 'tick';
  title: string;
  children: ReactNode;
}

const NeedCard: React.FC<NeedCardProps> = ({iconType, title, children}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.cardView, {backgroundColor: colors.textWhite}]}>
      <IconComponent type={iconType} width={48} height={48} />
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
  );
};

export default NeedCard;

const styles = StyleSheet.create({
  cardView: {
    width: 112,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 16,
    marginTop: 17,
  },
  descText: {
    marginTop: 6,
    width: 60,
    height: 28,
    fontSize: 10,
    lineHeight: 14,
    letterSpacing: -0.25,
    textAlign: 'center',
  },
});
