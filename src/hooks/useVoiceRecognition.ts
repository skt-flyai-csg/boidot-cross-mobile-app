import {useCallback, useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';

interface VoiceRecognitionState {
  results: string[];
  partialResults: string[];
  startRecognizing: () => Promise<void>;
  stopRecognizing: () => Promise<void>;
}

export const useVoiceRecognition = (): VoiceRecognitionState => {
  const [results, setResults] = useState<string[]>([]);
  const [partialResults, setPartialResults] = useState<string[]>([]);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = useCallback(e => {
    setResults(e.value);
  }, []);

  const onSpeechPartialResults = useCallback(e => {
    setPartialResults(e.value);
  }, []);

  const startRecognizing = useCallback(async () => {
    console.log('start');
    setResults([]);
    setPartialResults([]);

    try {
      await Voice.start('ko-KR');
    } catch (e) {
      console.error(e);
    }
  }, []);

  const stopRecognizing = useCallback(async () => {
    console.log('end');
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return {
    results,
    partialResults,
    startRecognizing,
    stopRecognizing,
  };
};
