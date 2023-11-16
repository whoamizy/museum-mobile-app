import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Header } from 'src/components'
import { LoginScreen, RegisterScreen } from 'src/screens'

import { AUTH_ROUTES } from './routes'

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => <Header hideBack /> }}>
      <Stack.Screen name={AUTH_ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AUTH_ROUTES.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  )
}
