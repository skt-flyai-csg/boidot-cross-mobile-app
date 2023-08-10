import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

const ChatBot = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.view]}>
      <LinearGradient colors={['#00000000', '#000000']} style={[styles.footer]}>
        <TouchableOpacity>
          <Icon name="user" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mic, {backgroundColor: colors.secondary}]}>
          <Icon name="mic" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <TouchableOpacity>
          <IconMat name="keyboard" size={24} color={colors.textWhite} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 16,
  },
  mic: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingVertical: 30,
    marginBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
  },
});
