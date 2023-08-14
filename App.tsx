import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';
import NavBar from './src/components/NavBar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useCallback, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import ChatBot from './src/screens/ChatBot';
import Diary from './src/screens/Diary';

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
    primary: '#4264EC',
    primaryHover: '#3B5AD4',
    backgroundHome: '#BBE5FE',
    backgroundGrey: '#E8E9ED',
    backgroundGeneral: '#F4F5F9',
    backgroundBox: '#22222C',
    textWhite: '#FFFFFF',
    textLightGrey: '#9DA3B1',
    textGrey: '#585F6F',
    textNormal: '#171723',
    textNavy: '#07153C',
    secondary: '#3A4767',
  },
};

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  // variables
  const snapPoints = useMemo(() => ['94%', '94%'], []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <GestureHandlerRootView style={[styles.contentContainer]}>
      <PaperProvider theme={theme}>
        <Diary />
        <NavBar handleOpenPress={handleOpenPress} />
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={[styles.handleIndicator]}
          backgroundStyle={[styles.bottomSheet]}>
          <ChatBot />
        </BottomSheet>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  bottomSheet: {
    backgroundColor: theme.colors.textNormal,
    borderRadius: 15,
  },
  handleIndicator: {
    marginVertical: 10,
    backgroundColor: theme.colors.textWhite,
  },
});
