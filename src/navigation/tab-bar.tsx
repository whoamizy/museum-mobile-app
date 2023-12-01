import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { isIOS } from 'src/utils'

import { TabRoutes } from './routes'

const Tab = createBottomTabNavigator()

export const TabBar = () => {
  const theme = useTheme()
  const initialRoute = TabRoutes

  const tabBarStyle = [!isIOS && styles.tabBar, styles.border_shadow]

  return (
    <Tab.Navigator
      screenOptions={{
        header: () => null,
        tabBarStyle,
        tabBarActiveTintColor: theme.tabbar.active,
        tabBarInactiveTintColor: theme.tabbar.inactive,
      }}>
      {initialRoute.map(({ component, name, Icon, title }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: Icon,
            tabBarLabel: title,
            tabBarLabelStyle: {
              fontFamily: theme.font.montserrat500,
              fontSize: 10,
              paddingBottom: 3,
            },
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    borderBottomWidth: 0,
    paddingVertical: 3,
  },
  border_shadow: {
    borderTopWidth: 0,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.03,
    shadowRadius: 11,
    elevation: 11,
  },
})
