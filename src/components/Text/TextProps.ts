import {ReactNode} from 'react';
import {TextStyle} from 'react-native';

export interface TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
}

export interface TextComponentProps extends TextProps {
  weight: 'light' | 'regular' | 'bold' | 'extra-bold' | 'heavy';
}
