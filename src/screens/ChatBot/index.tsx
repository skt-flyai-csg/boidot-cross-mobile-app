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
import Character from '../../components/ChatBot/Character';
import {useAuth} from '../../contexts/AuthContext';
import axios from 'axios';
import {BASE_URL, USER_ID} from '@env';
import LoadingIndicator from '../../components/ChatBot/LoadingIndicator';
import ReportButton from '../../components/ChatBot/ReportButton';

const ChatBot = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef(null);
  const date = moment().format('YYYY.MM.DD');
  const flatListRef = useRef(null);
  const [messages, setMessages] = useState(data.messages);
  const {colors} = useTheme();
  const {token, setTokenAndSave} = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [report, setReport] = useState({objectId: '', createdTime: ''});

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

  const listFooter = useCallback(() => {
    return isLoading ? (
      <View
        style={[
          styles.indicatorContainer,
          styles.bubble,
          {
            backgroundColor: colors.secondary,
            marginRight: 'auto',
          },
        ]}>
        <LoadingIndicator />
      </View>
    ) : isProcessed ? (
      <View style={[styles.listFooter]}>
        <ReportButton report={report} />
      </View>
    ) : (
      <View style={[styles.listFooter]} />
    );
  }, [isLoading]);

  const contentContainerStyle = useMemo(
    () => StyleSheet.flatten([styles.bottomSheetContent]),
    [],
  );

  async function getGptRequest(requestId: string) {
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
          const timer = setTimeout(() => getGptRequest(requestId), 1000);
          return () => clearTimeout(timer);
        }
        setIsLoading(false);
        setReport({
          objectId: response.data.object_id,
          createdTime: response.data.createdTime,
        });
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

  async function postGptRequest(request_object: string) {
    try {
      const response = await axios.post(
        `${BASE_URL}/gpt-requests/`,
        {user_id: USER_ID, request_object: request_object},
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
        const timer = setTimeout(() => getGptRequest(response.data.id), 60000);
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
    switch (text) {
      case 'ㅂ':
        postGptRequest('report');
        break;
      case 'ㅇ':
        postGptRequest('diary');
        break;
      default:
        setMessages(prev => [
          ...prev,
          {
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
              ListFooterComponent={listFooter}
              onContentSizeChange={scrollToBottom}
              onLayout={scrollToBottom}
            />
          </View>
        </View>
        <Character />
        <Footer
          handleButtonClick={handleButtonClick}
          setMessages={setMessages}
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
              setMessages={setMessages}
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
  listFooter: {
    height: 200,
  },
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
    marginBottom: 200,
    marginTop: 12,
  },
});
