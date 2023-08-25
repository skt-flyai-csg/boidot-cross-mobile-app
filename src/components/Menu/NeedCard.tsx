import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import IconComponent from '../Icon';
import TextComponent from '../TextComponent';
import {MenuCardProps} from '../../types';

const NeedCard = ({iconType, title, children}: MenuCardProps) => {
  const {theme} = useTheme();
  return (
    <View style={[styles.cardView, {backgroundColor: theme.white}]}>
      <IconComponent type={iconType} width={48} height={48} />
      <TextComponent
        weight="bold"
        style={[styles.titleText, {color: theme.textNavy}]}>
        {title}
      </TextComponent>
      <TextComponent
        weight="light"
        style={[styles.descText, {color: theme.textGrey}]}>
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
