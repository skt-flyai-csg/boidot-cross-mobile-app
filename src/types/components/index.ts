import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface NavigationParamList extends ParamListBase {
  Home: undefined;
  ChatT: undefined;
  Menu: undefined;
  Calendar: undefined;
  Diary: {
    objectId: string;
  };
  Report: {
    objectId: string;
  };
}

type DefaultScreenNavigationProp =
  NativeStackNavigationProp<NavigationParamList>;

export type DefaultScreenProps = {
  [x: string]: any;
  navigation: DefaultScreenNavigationProp;
};

type DiaryScreenNavigationProp = NativeStackNavigationProp<
  NavigationParamList,
  'Diary'
>;

export type DiaryScreenProps = {
  [x: string]: any;
  navigation: DiaryScreenNavigationProp;
};

type ReportScreenNavigationProp = NativeStackNavigationProp<
  NavigationParamList,
  'Report'
>;

export type ReportScreenProps = {
  [x: string]: any;
  navigation: ReportScreenNavigationProp;
};

export interface LoadingIndicatorProps {
  radius: number;
  color: string;
}

export interface NavBarProps {
  handleOpenPress: () => void;
}

export interface TopBarProps {
  isSettings: boolean;
  name: string;
  isWhite: boolean;
}

import {TextProps} from 'react-native';

export interface TextComponentProps extends TextProps {
  weight: 'light' | 'regular' | 'bold' | 'extraBold' | 'heavy';
}
