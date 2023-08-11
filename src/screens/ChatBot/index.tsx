import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Input from '../../components/ChatBot/Input';
import Footer from '../../components/ChatBot/Footer';
import Bubble from '../../components/ChatBot/Bubble';
import TextComponent from '../../components/Text';
import {useTheme} from 'react-native-paper';
import moment from 'moment';
import data from '../../assets/samples/messages.json';

const ChatBot = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef(null);
  const date = moment().format('YYYY.MM.DD');

  const [messages, setMessages] = useState(data.messages);

  const handleButtonClick = () => {
    setKeyboardVisible(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleDismiss = () => {
    setKeyboardVisible(false);
    setText('');
    Keyboard.dismiss();
  };

  const {colors} = useTheme();

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={[styles.view]}>
        <View style={[styles.messages]}>
          <View
            style={[styles.noticeBox, {backgroundColor: colors.backgroundBox}]}>
            <TextComponent
              weight="light"
              style={[styles.noticeText, {color: colors.textWhite}]}>
              모든 대화는 인공지능 알고리즘에 의해 자동 생성되는 것으로 사실과
              다를 수 있어요.
            </TextComponent>
          </View>
          <View
            style={[styles.dateBox, {backgroundColor: colors.backgroundBox}]}>
            <TextComponent
              weight="light"
              style={[styles.dateText, {color: colors.textLightGrey}]}>
              {date}
            </TextComponent>
          </View>
          <FlatList
            data={messages}
            renderItem={({item}) => (
              <Bubble isMe={item.isMe} message={item.message} />
            )}
          />
        </View>
        <Footer handleButtonClick={handleButtonClick} />
        <KeyboardAvoidingView
          behavior={Platform.select({
            ios: 'padding',
            android: undefined,
          })}>
          {keyboardVisible && (
            <Input
              inputRef={inputRef}
              text={text}
              setText={setText}
              setMessages={setMessages}
              handleDismiss={handleDismiss}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  messages: {
    paddingHorizontal: 16,
    gap: 12,
  },
  noticeBox: {
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 10,
  },
  noticeText: {
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.33,
    textAlign: 'center',
  },
  dateBox: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: 'center',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 9,
    lineHeight: 14,
    letterSpacing: 0.27,
  },
});
