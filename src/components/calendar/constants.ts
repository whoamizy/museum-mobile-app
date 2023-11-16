import { addMonths, set } from 'date-fns'

import { createMonth, deviceWidth } from 'src/utils'

export const ESTIMATED_ROW_HEIGHT = 48
export const SIZE = deviceWidth - 32

export const startDate = new Date()
export const START_MONTH = new Date().getMonth()

export const thisMonth = createMonth()
export const nextMonth = createMonth(set(addMonths(startDate, 1), { date: 1 }))

export const DATA = [
  { month: new Date().getMonth(), data: thisMonth },
  { month: new Date().getMonth() + 1, data: nextMonth },
]
