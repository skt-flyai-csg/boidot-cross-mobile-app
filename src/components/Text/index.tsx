import React from 'react';
import LightText from './LightText';
import RegularText from './RegularText';
import BoldText from './BoldText';
import ExtraBoldText from './ExtraBoldText';
import HeavyText from './HeavyText';
import {TextComponentProps} from './TextProps';

const TextComponent: React.FC<TextComponentProps> = ({
  weight,
  style,
  children,
}) => {
  switch (weight) {
    case 'light':
      return <LightText style={style}>{children}</LightText>;
    case 'regular':
      return <RegularText style={style}>{children}</RegularText>;
    case 'bold':
      return <BoldText style={style}>{children}</BoldText>;
    case 'extra-bold':
      return <ExtraBoldText style={style}>{children}</ExtraBoldText>;
    case 'heavy':
      return <HeavyText style={style}>{children}</HeavyText>;
    default:
      return <RegularText style={style}>{children}</RegularText>;
  }
};

export default TextComponent;
