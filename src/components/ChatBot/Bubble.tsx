import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import TextComponent from '../Text';

interface BubbleProps {
  isMe: boolean;
  message: string;
}

const Bubble: React.FC<BubbleProps> = ({isMe, message}) => {
  const {colors} = useTheme();
  if (isMe) {
    return (
      <View
        style={[
          styles.bubble,
          {backgroundColor: colors.primary, maxWidth: 230, marginLeft: 'auto'},
        ]}>
        <TextComponent
          weight="regular"
          style={[styles.text, {color: colors.textWhite}]}>
          {message}
        </TextComponent>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.bubble,
          {
            backgroundColor: colors.secondary,
            maxWidth: 230,
            marginRight: 'auto',
          },
        ]}>
        <TextComponent
          weight="regular"
          style={[styles.text, {color: colors.textWhite}]}>
          {message}
        </TextComponent>
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
});
