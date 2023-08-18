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
      <View style={[styles.gap12]}>
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
        {/* <ReportButton
          createdTime="2023-08-18T01:40:04.780595Z"
          objectId="a938c5df-b9be-4918-9201-26180ebc1ce8"
        />
        <DiaryButton
          createdTime="2023-08-18T01:40:04.780595Z"
          objectId="eae03c0e-b536-4cae-aba7-44c64a5a53f8"
        /> */}
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
