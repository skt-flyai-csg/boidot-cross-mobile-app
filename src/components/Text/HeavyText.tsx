import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextProps} from './TextProps';

const HeavyText: React.FC<TextProps> = props => {
  const {style, children} = props;

  return (
    <Text {...props} style={[style, styles.family]}>
      {children}
    </Text>
  );
};

export default HeavyText;

const styles = StyleSheet.create({
  family: {fontFamily: 'NanumSquareNeo-Variable', fontWeight: '700'},
});
