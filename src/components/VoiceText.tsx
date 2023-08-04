import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useVoiceRecognition} from '../hooks/useVoiceRecognition';

const VoiceTest: React.FC = () => {
  const {results, startRecognizing, stopRecognizing} = useVoiceRecognition();
  const [recognitionRunning, setRecognitionRunning] = useState(false);

  useEffect(() => {
    if (recognitionRunning) {
      const timer = setTimeout(() => {
        stopRecognizing();
        setRecognitionRunning(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [recognitionRunning, stopRecognizing]);

  const onStart = () => {
    startRecognizing();
    setRecognitionRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Test</Text>
      <Text style={styles.label}>Results: {results.join(', ')}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={onStart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%',
  },
});

export default VoiceTest;
