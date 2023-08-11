import React, {Dispatch, SetStateAction, RefObject} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useKeyboardHeight} from '../../hooks/useKeyboardHeight';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

interface InputProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<TextInput>;
}

const Input: React.FC<InputProps> = ({text, setText, inputRef}) => {
  const keyboardHeight = useKeyboardHeight();
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.input,
        styles.paddingHorizontal,
        {marginBottom: keyboardHeight},
      ]}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.backgroundGeneral}]}>
        <Icon name="plus" size={28} color={colors.textNavy} />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        placeholder="메시지 입력"
        placeholderTextColor={colors.textLightGrey}
        style={[styles.textInput, {backgroundColor: colors.textWhite}]}
        underlineColorAndroid="transparent"
        onChangeText={t => setText(t)}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.backgroundGeneral}]}>
        <Icon name="mic" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              text === '' ? colors.backgroundGrey : colors.primary,
          },
        ]}>
        <Icon name="arrow-up" size={28} color={colors.textWhite} />
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
