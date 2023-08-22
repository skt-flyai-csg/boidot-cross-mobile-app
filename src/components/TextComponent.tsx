import React from 'react';
import {Text, TextStyle} from 'react-native';
import {TextComponentProps} from '../types';

const TextComponent: React.FC<TextComponentProps> = ({
  weight,
  style,
  children,
  ...props
}) => {
  const fontMap = {
    light: 'NanumSquareNeo-aLt',
    regular: 'NanumSquareNeo-bRg',
    bold: 'NanumSquareNeo-cBd',
    extraBold: 'NanumSquareNeo-dEb',
    heavy: 'NanumSquareNeo-eHv',
  };

  const weightMap: Record<string, TextStyle['fontWeight']> = {
    light: '300',
    regular: '400',
    bold: '700',
    extraBold: '800',
    heavy: '900',
  };

  return (
    <Text
      {...props}
      style={[
        {fontFamily: fontMap[weight], fontWeight: weightMap[weight]},
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TextComponent;
