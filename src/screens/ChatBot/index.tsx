import React, {useRef, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../components/ChatBot/Input';
import Footer from '../../components/ChatBot/Footer';

const ChatBot = () => {
  const [text, setText] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const inputRef = useRef(null);

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

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      <View style={[styles.view]}>
        <Footer handleButtonClick={handleButtonClick} />
        <KeyboardAvoidingView
          behavior={Platform.select({
            ios: 'padding',
            android: undefined,
          })}>
          {keyboardVisible && (
            <Input inputRef={inputRef} text={text} setText={setText} />
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
});
