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
import TextComponent from '../../components/Text';
import {useTheme} from 'react-native-paper';
import moment from 'moment';
import data from '../../assets/samples/messages.json';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';

const ChatBot = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef(null);
  const date = moment().format('YYYY.MM.DD');
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState(data.messages);
  const {colors} = useTheme();

  const handleDismiss = useCallback(() => {
    setText('');
    Keyboard.dismiss();
  }, []);

  const handleButtonClick = useCallback(() => {
    setKeyboardVisible(true);
    setTimeout(() => inputRef.current.focus(), 0);
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false),
    );
    return () => keyboardDidHideListener.remove();
  }, []);

  const renderItem = useCallback(
    ({item}) => <Bubble isMe={item.isMe} message={item.message} />,
    [],
  );

  const renderItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const scrollToBottom = useCallback(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, []);

  const listFooter = useCallback(() => <View style={styles.listFooter} />, []);

  const contentContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.bottomSheetContent]),
    [],
  );

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={styles.view}>
        <View style={styles.messages}>
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
              onContentSizeChange={scrollToBottom}
              onLayout={scrollToBottom}
              ListFooterComponent={listFooter}
            />
          </View>
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
  listFooter: {
    height: 200,
  },
});
