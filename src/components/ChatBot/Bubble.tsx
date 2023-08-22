import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '../../contexts/ThemeContext';
import TextComponent from '../TextComponent';

interface BubbleProps {
  isMe: boolean;
  message: string;
}

const Bubble: React.FC<BubbleProps> = ({isMe, message}) => {
  const {theme} = useTheme();

  if (isMe) {
    return (
      <View
        style={[
          styles.bubble,
          {backgroundColor: theme.primary, maxWidth: 230, marginLeft: 'auto'},
        ]}>
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
            {
              backgroundColor: theme.secondary,
              maxWidth: 230,
              marginRight: 'auto',
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
});
