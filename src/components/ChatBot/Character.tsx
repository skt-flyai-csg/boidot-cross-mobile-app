import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Character() {
  return (
    <View style={[styles.view]}>
      <Image
        style={[styles.character]}
        source={require('../../assets/images/myCharacter.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  character: {
    marginTop: 30,
    marginBottom: 40,
    width: 120,
    height: 160,
    position: 'absolute',
    bottom: 120,
  },
});
