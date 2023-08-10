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
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import ChatT from './src/screens/ChatT';

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
  const snapPoints = useMemo(() => [780, 780], []);

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
        <ChatT />
        <NavBar handleOpenPress={handleOpenPress} />
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}>
          <View style={[styles.contentContainer]}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});
