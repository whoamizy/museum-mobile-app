import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { APP_ROUTES, ROUTES } from './routes'
import { SvgProps } from 'react-native-svg'

export type Navigation = NativeStackNavigationProp<ParamListBase, ROUTES>

export type Push = (screen: string, params?: object) => void

export interface TabBarRoute {
  component: () => JSX.Element
  name: APP_ROUTES
  Icon: (props: SvgProps) => JSX.Element
  title: string
}
