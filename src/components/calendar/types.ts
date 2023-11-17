import { type ViewToken } from 'react-native'

import { type DATA } from './constants'

export interface ViewableInfo {
  changed: ViewToken[]
  viewableItems: ViewToken[]
}

export interface InfoItem {
  date: string
  day: string
}

export type Item = (typeof DATA)[0]
