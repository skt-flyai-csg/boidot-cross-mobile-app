import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Input from '../../components/ChatBot/Input';
import Footer from '../../components/ChatBot/Footer';
import Bubble from '../../components/ChatBot/Bubble';
import TextComponent from '../../components/TextComponent';
import {useTheme} from '../../contexts/ThemeContext';
import moment from 'moment';
import defaultData from '../../assets/samples/messages.json';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Character from '../../components/ChatBot/Character';
import ListFooter from '../../components/ChatBot/ListFooter';
import {useGptRequest} from '../../hooks/useGptRequest';
import ReportButton from '../../components/ChatBot/ReportButton';
import DiaryButton from '../../components/ChatBot/DiaryButton';
import {MessageProps} from '../../types';

const ChatBot = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef(null);
  const date = moment().format('YYYY.MM.DD');
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState(defaultData.messages);
  const {theme} = useTheme();

  const handleMessage = useCallback(
    ({
      type,
      message = '',
      isMe = true,
      data = {objectId: '', createdTime: ''},
    }: MessageProps) => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          type,
          isMe,
          message,
          data,
        },
      ]);
    },
    [],
  );

  const {postGptRequest, isLoading, isProcessed} = useGptRequest(handleMessage);

  const handleDismiss = useCallback(() => {
    setText('');
    Keyboard.dismiss();
  }, []);

  const handleButtonClick = useCallback(() => {
    setKeyboardVisible(true);
    setTimeout(() => inputRef?.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );
    return () => keyboardDidHideListener.remove();
  }, []);

  const renderItem = useCallback(({item}: any) => {
    switch (item.type) {
      case 'bubble':
        return <Bubble isMe={item.isMe} message={item.message} />;
      case 'report':
        return <ReportButton report={item.data} />;
      case 'diary':
        return <DiaryButton diary={item.data} />;
    }
  }, []);

  const renderItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const listFooter = useCallback(() => {
    return <ListFooter isLoading={isLoading} isProcessed={isProcessed} />;
  }, [isLoading, isProcessed]);

  const contentContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.bottomSheetContent]),
    [],
  );

  const handleSubmit = (message: string) => {
    setMessages(prev => [
      ...prev,
      {type: 'bubble', isMe: true, message: message},
    ]);
    switch (message) {
      case '우리 아이 하루 요약':
        postGptRequest('report');
        break;
      case '우리 아이 일기':
        postGptRequest('diary');
        break;
      default:
        setMessages(prev => [
          ...prev,
          {
            type: 'bubble',
            isMe: false,
            message: '무슨 말씀이신지 잘 모르겠어요. 다시 한번 말씀해주세요.',
          },
        ]);
        break;
    }
    handleDismiss();
  };

  const scrollToBottom = useCallback(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={styles.view}>
        <View style={styles.messages}>
          <View style={[styles.noticeBox, {backgroundColor: theme.box}]}>
            <TextComponent
              weight="light"
              style={[styles.noticeText, {color: theme.white}]}>
              모든 대화는 인공지능 알고리즘에 의해 자동 생성되는 것으로 사실과
              다를 수 있어요.
            </TextComponent>
          </View>
          <View style={[styles.dateBox, {backgroundColor: theme.box}]}>
            <TextComponent
              weight="light"
              style={[styles.dateText, {color: theme.textLightGrey}]}>
              {date}
            </TextComponent>
          </View>
          <View style={styles.bottomSheetContainer}>
            <BottomSheetFlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={contentContainerStyle}
              ItemSeparatorComponent={renderItemSeparator}
              scrollEnabled
              springConfig={{
                damping: 20,
                mass: 1,
                stiffness: 200,
                overshootClamping: false,
              }}
              ListFooterComponent={listFooter}
              onContentSizeChange={scrollToBottom}
              onLayout={scrollToBottom}
            />
          </View>
        </View>
        <Character />
        <Footer
          handleSubmit={handleSubmit}
          handleButtonClick={handleButtonClick}
          setText={setText}
        />
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
              handleSubmit={handleSubmit}
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
    flex: 1,
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
  separator: {
    height: 12,
  },
  bottomSheetContainer: {
    flex: 1,
    marginBottom: 50,
  },
  bottomSheetContent: {
    flexGrow: 1,
    paddingTop: 16,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
  gap12: {
    gap: 12,
  },
});
