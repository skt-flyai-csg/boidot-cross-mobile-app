import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {View} from 'react-native';
import Menu from './src/pages/Menu';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      backgroundHome: string;
      backgroundGrey: string;
      textWhite: string;
      textLightGrey: string;
      textNormal: string;
      textNavy: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    testColor: '#BADA55',
    backgroundHome: '#BBE5FE',
    backgroundGrey: '#E8E9ED',
    backgroundGeneral: '#F4F5F9',
    textWhite: '#FFFFFF',
    textLightGrey: '#9DA3B1',
    textGrey: '#585F6F',
    textNormal: '#171723',
    textNavy: '#07153C',
    secondary: '#3A4767',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Menu></Menu>
      </View>
    </PaperProvider>
  );
}
