import React from 'react'
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import { ROUTES } from './routes'
import { TabBar } from './tab-bar'

const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={ROUTES.TAB} component={TabBar} />
    </Stack.Navigator>
  )
}
