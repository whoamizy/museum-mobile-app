import React from 'react'
import {
  createNativeStackNavigator,
  type NativeStackHeaderProps,
} from '@react-navigation/native-stack'

import { Header } from 'src/components'
import { t } from 'src/i18n'
import { CreateTicketScreen, ExhibitionScreen } from 'src/screens'
import { TicketScreen } from 'src/screens/ticket'

import { ROUTES } from './routes'
import { TabBar } from './tab-bar'

const ExhibitionHeader = ({ navigation }: NativeStackHeaderProps) => (
  <Header onBack={navigation.goBack} title={t('exhibitions.item.title')} />
)

const CreateTicketHeader = ({ navigation }: NativeStackHeaderProps) => (
  <Header onBack={navigation.goBack} title={t('exhibitions.item.getTicket')} />
)

const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name={ROUTES.TAB} component={TabBar} />
      <Stack.Screen
        name={ROUTES.EXHIBITION}
        component={ExhibitionScreen}
        options={{ header: ExhibitionHeader }}
      />
      <Stack.Screen
        name={ROUTES.CREATE_TICKET}
        component={CreateTicketScreen}
        options={{ header: CreateTicketHeader }}
      />
      <Stack.Screen name={ROUTES.TICKET} component={TicketScreen} />
    </Stack.Navigator>
  )
}
