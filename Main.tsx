import * as React from 'react';
import 'react-native-gesture-handler';
import NavBar from './src/components/NavBar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {useCallback, useEffect, useMemo, useRef} from 'react';
import {StyleSheet} from 'react-native';
import ChatBot from './src/screens/ChatBot';
import Calendar from './src/screens/Calendar';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Home from './src/screens/Home';
import ChatT from './src/screens/ChatT';
import Menu from './src/screens/Menu';
import Diary from './src/screens/Diary';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AUTH_ID, AUTH_PW, BASE_URL} from '@env';
import axios from 'axios';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';
import {useAuth} from './src/contexts/AuthContext';
import Report from './src/screens/Report/index';
import {useTheme} from './src/contexts/ThemeContext';

const Stack = createNativeStackNavigator();

function Main() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };
  const {token, setTokenAndSave} = useAuth();
  const {theme} = useTheme();

  async function SetToken(formData: any) {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth-token/`,
        formData.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      if (response.status === 200) {
        await setTokenAndSave(response.data.token);
      }
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    if (!token) {
      const formData = new URLSearchParams();
      formData.append('username', AUTH_ID);
      formData.append('password', AUTH_PW);

      SetToken(formData);
    }
  }, []);

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

  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <GestureHandlerRootView style={[styles.contentContainer]}>
        <FlipperAsyncStorage />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatT"
            component={ChatT}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Diary"
            component={Diary}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Calendar"
            component={Calendar}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Report"
            component={Report}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <NavBar handleOpenPress={handleOpenPress} />
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={[
            styles.handleIndicator,
            {backgroundColor: theme.white},
          ]}
          backgroundStyle={[
            styles.bottomSheet,
            {backgroundColor: theme.backgroundChat},
          ]}>
          <ChatBot />
        </BottomSheet>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default Main;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  bottomSheet: {
    borderRadius: 15,
  },
  handleIndicator: {
    marginVertical: 10,
  },
});
