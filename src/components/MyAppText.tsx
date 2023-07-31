import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

type MyAppTextProps = {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
};

const MyAppText: React.FC<MyAppTextProps> = props => {
  const {style, children} = props;

  return (
    <Text {...props} style={[style, styles.family]}>
      {children}
    </Text>
  );
};

export default MyAppText;

const styles = StyleSheet.create({
  family: {fontFamily: 'NanumSquareNeo-bRg.ttf'},
});
