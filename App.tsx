import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Home from './src/pages/Home';
import {View} from 'react-native';

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
    backgroundGrey: '#F1F2F6',
    textWhite: '#FFFFFF',
    textLightGrey: '#9DA3B1',
    textNormal: '#171723',
    textNavy: '#07153C',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View>
        <Home></Home>
      </View>
    </PaperProvider>
  );
}
