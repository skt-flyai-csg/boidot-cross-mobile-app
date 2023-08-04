import React from 'react';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

const ChatBot = () => {
  const {colors} = useTheme();
  return (
    <View
      style={[
        {backgroundColor: colors.textNormal, position: 'absolute', bottom: 0},
      ]}>
      <Text style={[{color: 'white'}]}>안안녕</Text>
    </View>
  );
};

export default ChatBot;
