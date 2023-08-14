import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {useVoiceRecognition} from '../../hooks/useVoiceRecognition';
import TextComponent from '../Text';
import {MessageProps} from './Input';

interface FooterProps {
  handleButtonClick: () => void;
  setMessages: Dispatch<SetStateAction<MessageProps[]>>;
}

const Footer: React.FC<FooterProps> = ({handleButtonClick, setMessages}) => {
  const {colors} = useTheme();
  const {results, startRecognizing, stopRecognizing} = useVoiceRecognition();
  const [recognitionRunning, setRecognitionRunning] = useState(false);
  const [isResultAdded, setIsResultAdded] = useState(false);

  useEffect(() => {
    if (!recognitionRunning && results.length > 0 && !isResultAdded) {
      setMessages(prev => [...prev, {isMe: true, message: results[0]}]);
      setIsResultAdded(true);
    }
  }, [recognitionRunning, results]);

  const onStart = () => {
    startRecognizing();
    setIsResultAdded(false);
    setRecognitionRunning(true);
    setTimeout(() => {
      stopRecognizing();
      setRecognitionRunning(false);
    }, 5000);
  };

  return (
    <View style={[styles.view]}>
      {recognitionRunning && (
        <TextComponent weight="bold" style={[styles.text]}>
          {results.length === 0 ? '듣고 있어요' : results}
        </TextComponent>
      )}
      <LinearGradient
        colors={['#00000000', colors.textNormal]}
        style={[styles.footer, styles.paddingHorizontal]}>
        <TouchableOpacity>
          <Icon name="user" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.secondary}]}
          onPress={onStart}>
          <Icon name="mic" size={24} color={colors.textWhite} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonClick}>
          <IconMat name="keyboard" size={24} color={colors.textWhite} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    bottom: 0,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  button: {
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
