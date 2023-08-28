import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '../../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Feather';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import {useVoiceRecognition} from '../../hooks/useVoiceRecognition';
import TextComponent from '../TextComponent';

interface FooterProps {
  handleButtonClick: () => void;
  setText: Dispatch<SetStateAction<string>>;
  handleSubmit: () => void;
}

const Footer: React.FC<FooterProps> = ({
  handleButtonClick,
  setText,
  handleSubmit,
}) => {
  const {theme} = useTheme();
  const {results, startRecognizing, stopRecognizing} = useVoiceRecognition();
  const [recognitionRunning, setRecognitionRunning] = useState(false);
  const [isResultAdded, setIsResultAdded] = useState(false);

  useEffect(() => {
    if (!recognitionRunning && results.length > 0 && !isResultAdded) {
      setIsResultAdded(true);
      handleSubmit();
    }
  }, [recognitionRunning, results, isResultAdded]);

  const onStart = useCallback(() => {
    startRecognizing();
    setIsResultAdded(false);
    setRecognitionRunning(true);
    setTimeout(() => {
      stopRecognizing();
      setRecognitionRunning(false);
    }, 5000);
  }, [startRecognizing, stopRecognizing]);

  return (
    <View style={styles.view}>
      {recognitionRunning && (
        <TextComponent weight="bold" style={styles.text}>
          {results.length === 0 ? '듣고 있어요' : results}
        </TextComponent>
      )}
      <LinearGradient
        colors={['#00000000', theme.backgroundChat]}
        style={styles.footer}>
        <TouchableOpacity>
          <Icon name="user" size={24} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.secondary}]}
          onPress={onStart}>
          <Icon name="mic" size={24} color={theme.white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonClick}>
          <IconMat name="keyboard" size={24} color={theme.white} />
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
  button: {
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingVertical: 30,
    paddingHorizontal: 16,
    marginBottom: 34,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
  },
});
