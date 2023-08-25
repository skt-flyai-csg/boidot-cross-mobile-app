import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from '../TextComponent';
import {ExampleProps} from '../../types';

const Example = ({name, title, example}: ExampleProps) => {
  const {theme} = useTheme();
  return (
    <View style={[styles.alignCenter, styles.justifyCenter, styles.gap14]}>
      <Icon name={name} color={theme.textNavy} size={24} />
      <TextComponent
        weight="heavy"
        style={[styles.title, {color: theme.textNavy}]}>
        {title}
      </TextComponent>
      <View
        style={[
          styles.alignCenter,
          styles.justifyCenter,
          styles.box,
          {backgroundColor: theme.backgroundGeneral},
        ]}>
        <TextComponent
          weight="bold"
          style={[styles.example, {color: theme.textGrey}]}>
          {example}
        </TextComponent>
      </View>
    </View>
  );
};

export default Example;

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  gap14: {
    gap: 14,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
  },
  example: {
    fontSize: 12,
    lineHeight: 14,
  },
  box: {
    width: 302,
    height: 42,
    borderRadius: 10,
  },
});
