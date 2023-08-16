import {TextProps} from 'react-native';

export interface TextComponentProps extends TextProps {
  weight: 'light' | 'regular' | 'bold' | 'extraBold' | 'heavy';
}
