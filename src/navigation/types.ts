import { type SvgProps } from 'react-native-svg'
import { type ParamListBase, type RouteProp } from '@react-navigation/native'
import { type NativeStackNavigationProp } from '@react-navigation/native-stack'

import { type ExhibitionParams } from 'src/types'

import { type APP_ROUTES, type ROUTES } from './routes'

export type Navigation = NativeStackNavigationProp<ParamListBase, ROUTES>

export type Push = (screen: string, params?: object) => void

export interface TabBarRoute {
  component: () => JSX.Element
  name: APP_ROUTES
  Icon: (props: SvgProps) => JSX.Element
  title: string
}

export type ExhibitionProp = RouteProp<
  { Exhibition: ExhibitionParams },
  'Exhibition'
>
