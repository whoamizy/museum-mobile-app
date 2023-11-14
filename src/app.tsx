import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { clientPersister, queryClient } from './utils';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { RawIntlProvider } from 'react-intl';
import { intl } from './i18n';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { RootNavigation } from './navigation/root';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  const [persistReady, setPersistReady] = useState(false);
  const [navigationReady, setNavigationReady] = useState(false);

  const isAppReady = useCallback(() => {
    if (persistReady && navigationReady) {
      SplashScreen.hide();
    }
  }, [persistReady, navigationReady]);

  useEffect(() => {
    isAppReady();
  }, [isAppReady]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <GestureHandlerRootView style={styles.f1}>
          <PersistQueryClientProvider
            client={queryClient}
            onSuccess={() => setPersistReady(true)}
            persistOptions={{
              persister: clientPersister,
            }}>
            <NavigationContainer
              onReady={() => setNavigationReady(true)}>
              <RawIntlProvider value={intl}>
                <RootNavigation />
              </RawIntlProvider>
            </NavigationContainer>
          </PersistQueryClientProvider>
          <Toast />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
})

export default App;
