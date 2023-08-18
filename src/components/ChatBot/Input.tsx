import React, {Dispatch, SetStateAction, RefObject, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {useKeyboardHeight} from '../../hooks/useKeyboardHeight';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import {BASE_URL, USER_ID} from '@env';

export interface MessageProps {
  isMe: boolean;
  message: string;
}

interface InputProps {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<TextInput>;
  setMessages: Dispatch<SetStateAction<MessageProps[]>>;
  handleDismiss: () => void;
}

const Input: React.FC<InputProps> = ({
  text,
  setText,
  inputRef,
  setMessages,
  handleDismiss,
}) => {
  const keyboardHeight = useKeyboardHeight();
  const {colors} = useTheme();
  const {token, setTokenAndSave} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);

  async function gptRequestGet(requestId: string) {
    console.log('리포트 받아오는 중', requestId);
    try {
      const response = await axios.get(
        `${BASE_URL}/gpt-requests/${requestId}/`,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        setIsProcessed(response.data.is_processed);
        if (!response.data.is_processed) {
          const timer = setTimeout(() => gptRequestGet(requestId), 500);
          return () => clearTimeout(timer);
        }
        setIsLoading(false);
        setMessages(prev => [
          ...prev,
          {
            isMe: false,
            message:
              '에이닷이 리포트를 생성했어요! 아래 버튼을 눌러 확인해주세요!',
          },
        ]);
      }
    } catch (err) {
      throw err;
    }
  }

  async function gptRequestPost() {
    try {
      const response = await axios.post(
        `${BASE_URL}/gpt-requests/`,
        {user_id: USER_ID, request_object: 'report'},
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 201) {
        setIsProcessed(response.data.is_processed);
        setIsLoading(true);
        setMessages(prev => [
          ...prev,
          {
            isMe: false,
            message: '에이닷이 보고서를 생성 중입니다. 조금만 기다려주세요....',
          },
        ]);
        const timer = setTimeout(() => gptRequestGet(response.data.id), 500);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          isMe: false,
          message: '메시지 전송에 실패했어요. 다시 물어봐주세요.',
        },
      ]);
      throw err;
    }
  }

  const handleSubmit = () => {
    setMessages(prev => [...prev, {isMe: true, message: text}]);
    if (text === '우리 아이 보고서') {
      gptRequestPost();
    }
    handleDismiss();
  };

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
        onPress={handleSubmit}
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
