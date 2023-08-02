import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import TextComponent from '../Text';

interface ExampleProps {
  name: string;
  title: string;
  example: string;
}

const Example: React.FC<ExampleProps> = ({name, title, example}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.alignCenter, styles.justifyCenter, styles.gap14]}>
      <Icon name={name} color={colors.textNavy} size={24} />
      <TextComponent
        weight="heavy"
        style={[styles.title, {color: colors.textNavy}]}>
        {title}
      </TextComponent>
      <View
        style={[
          styles.alignCenter,
          styles.justifyCenter,
          styles.box,
          {backgroundColor: colors.backgroundGeneral},
        ]}>
        <TextComponent
          weight="bold"
          style={[styles.example, {color: colors.textGrey}]}>
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
