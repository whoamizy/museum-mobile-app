import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { storage } from 'src/utils'

import { PersistData } from '../enums'
import { AuthNavigator } from './auth'
import { MainNavigator } from './main'
import { ROUTES } from './routes'

const Stack = createNativeStackNavigator()

const hasToken = storage.contains(PersistData.TOKEN)
const initialRoute = hasToken ? ROUTES.MAIN_NAVIGATOR : ROUTES.AUTH_NAVIGATOR

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={initialRoute}>
      <Stack.Screen name={ROUTES.MAIN_NAVIGATOR} component={MainNavigator} />
      <Stack.Screen name={ROUTES.AUTH_NAVIGATOR} component={AuthNavigator} />
    </Stack.Navigator>
  )
}
