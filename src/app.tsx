import '@formatjs/intl-getcanonicallocales/polyfill'
import '@formatjs/intl-locale/polyfill'
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/locale-data/ru'
import '@formatjs/intl-pluralrules'

import React, { useCallback, useEffect, useState } from 'react'
import { RawIntlProvider } from 'react-intl'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { ThemeProvider } from 'styled-components/native'

import { UserContextProvider } from './context'
import { intl } from './i18n'
import { RootNavigation } from './navigation/root'
import { theme } from './theme'
import { clientPersister, queryClient } from './utils'

function App(): JSX.Element {
  const [persistReady, setPersistReady] = useState(false)
  const [navigationReady, setNavigationReady] = useState(false)

  const isAppReady = useCallback(() => {
    if (persistReady && navigationReady) {
      SplashScreen.hide()
    }
  }, [persistReady, navigationReady])

  useEffect(() => {
    isAppReady()
  }, [isAppReady])

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
            <NavigationContainer onReady={() => setNavigationReady(true)}>
              <RawIntlProvider value={intl}>
                <UserContextProvider>
                  <RootNavigation />
                </UserContextProvider>
              </RawIntlProvider>
            </NavigationContainer>
          </PersistQueryClientProvider>
          <Toast />
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  f1: {
    flex: 1,
  },
})

export default App
