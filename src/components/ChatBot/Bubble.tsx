import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import TextComponent from '../TextComponent';
import {BubbleProps} from '../../types';

const Bubble = ({isMe, message}: BubbleProps) => {
  const {theme} = useTheme();

  if (isMe) {
    return (
      <View
        style={[styles.bubble, styles.right, {backgroundColor: theme.primary}]}>
        <TextComponent
          weight="regular"
          style={[styles.text, {color: theme.white}]}>
          {message}
        </TextComponent>
      </View>
    );
  } else {
    return (
      <View style={[styles.gap12]}>
        <View
          style={[
            styles.bubble,
            styles.left,
            {
              backgroundColor: theme.secondary,
            },
          ]}>
          <TextComponent
            weight="regular"
            style={[styles.text, {color: theme.white}]}>
            {message}
          </TextComponent>
        </View>
      </View>
    );
  }
};

export default Bubble;

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
  gap12: {
    gap: 12,
  },
  indicatorContainer: {
    flexDirection: 'row',
  },
  left: {
    maxWidth: 230,
    alignSelf: 'flex-start',
  },
  right: {
    maxWidth: 230,
    alignSelf: 'flex-end',
  },
});
