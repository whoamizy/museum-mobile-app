/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {clientPersister, queryClient} from './utils';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {RawIntlProvider} from 'react-intl';
import {intl} from './i18n';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

function App(): JSX.Element {
  const [persistReady, setPersistReady] = useState(false);

  const isAppReady = useCallback(() => {
    if (persistReady) {
      SplashScreen.hide();
    }
  }, [persistReady]);

  useEffect(() => {
    isAppReady();
  }, [isAppReady]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <PersistQueryClientProvider
          client={queryClient}
          onSuccess={() => setPersistReady(true)}
          persistOptions={{
            persister: clientPersister,
          }}>
          <RawIntlProvider value={intl}>
            <View>
              <Text>Hello</Text>
            </View>
          </RawIntlProvider>
        </PersistQueryClientProvider>
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
