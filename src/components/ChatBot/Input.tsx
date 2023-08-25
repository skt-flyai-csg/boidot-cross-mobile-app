import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useKeyboardHeight} from '../../hooks/useKeyboardHeight';
import {useTheme} from '../../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';
import {InputProps} from '../../types';

const Input = ({text, setText, inputRef, handleSubmit}: InputProps) => {
  const keyboardHeight = useKeyboardHeight();
  const {theme} = useTheme();
  return (
    <View
      style={[
        styles.input,
        styles.paddingHorizontal,
        {marginBottom: keyboardHeight},
      ]}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: theme.backgroundGeneral}]}>
        <Icon name="plus" size={28} color={theme.textNavy} />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        placeholder="메시지 입력"
        placeholderTextColor={theme.textGrey}
        style={[styles.textInput, {backgroundColor: theme.white}]}
        underlineColorAndroid="transparent"
        onChangeText={t => setText(t)}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: theme.backgroundGeneral}]}>
        <Icon name="mic" size={24} color={theme.primary} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit}
        style={[
          styles.button,
          {
            backgroundColor: text === '' ? theme.backgroundGrey : theme.primary,
          },
        ]}>
        <Icon name="arrow-up" size={28} color={theme.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  input: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#CED1DA',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: 217,
    height: 40,
    fontSize: 14,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
