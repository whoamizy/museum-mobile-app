import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from 'src/screens/auth'

import { AUTH_ROUTES } from './routes'

const Stack = createNativeStackNavigator()

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={AUTH_ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={AUTH_ROUTES.REGISTER} component={LoginScreen} />
    </Stack.Navigator>
  )
}
