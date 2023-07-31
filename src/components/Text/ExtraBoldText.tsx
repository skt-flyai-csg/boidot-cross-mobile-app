import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextProps} from './TextProps';

const ExtraBoldText: React.FC<TextProps> = props => {
  const {style, children} = props;

  return (
    <Text {...props} style={[style, styles.family]}>
      {children}
    </Text>
  );
};

export default ExtraBoldText;

const styles = StyleSheet.create({
  family: {fontFamily: 'NanumSquareNeo-dEb.ttf', fontWeight: '600'},
});
