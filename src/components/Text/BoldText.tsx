import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextProps} from './TextProps';

const BoldText: React.FC<TextProps> = props => {
  const {style, children} = props;

  return (
    <Text {...props} style={[style, styles.family]}>
      {children}
    </Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  family: {fontFamily: 'NanumSquareNeo-cBd.ttf', fontWeight: '500'},
});
