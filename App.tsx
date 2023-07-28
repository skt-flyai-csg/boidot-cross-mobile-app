import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
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
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView />
    </PaperProvider>
  );
}
