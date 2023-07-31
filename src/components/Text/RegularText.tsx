import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TextProps} from './TextProps';

const RegularText: React.FC<TextProps> = props => {
  const {style, children} = props;

  return (
    <Text {...props} style={[style, styles.family]}>
      {children}
    </Text>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  family: {fontFamily: 'NanumSquareNeo-bRg.ttf', fontWeight: '400'},
});
