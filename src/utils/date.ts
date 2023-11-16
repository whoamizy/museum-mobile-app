import {
  addDays,
  eachDayOfInterval,
  format,
  getDay,
  getDaysInMonth,
  set,
  subMonths,
} from 'date-fns'
import parseISO from 'date-fns/parseISO'

import { t } from 'src/i18n'

const currentDate = new Date()

export const timezoneOffset = currentDate.getTimezoneOffset() / 60

export const prepareWithoutTimeZone = (date: string) => {
  return set(parseISO(date), {
    hours: 0 - timezoneOffset,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  })
}

export const setTimeWithoutTimeZone = (date: string) => {
  return format(prepareWithoutTimeZone(date), 'HH:mm')
}

export const createMonth = (initialStart = new Date()) => {
  const prevMonth = subMonths(initialStart, 1)
  const daysInPrevMonth = getDaysInMonth(prevMonth)

  const monthStarts = set(initialStart, {
    date: 1,
  })

  const weekOfStart = getDay(monthStarts) - 2

  const start = set(prevMonth, {
    date: daysInPrevMonth - weekOfStart,
  })

  const lastDay = set(initialStart, { date: getDaysInMonth(initialStart) })

  const amount = getDay(lastDay) === 0 ? 0 : 7 - getDay(lastDay)

  const endDate = set(initialStart, { date: getDaysInMonth(initialStart) })

  const end = addDays(endDate, amount)

  const days = eachDayOfInterval({ start, end }, { step: 1 })

  return days.map((el) => ({
    date: set(el, {
      minutes: 0,
      milliseconds: 0,
      seconds: 0,
      hours: 0 - timezoneOffset,
    }).toISOString(),
    day: format(el, 'dd'),
  }))
}

export const MONTHS = [
  t('months.january'),
  t('months.february'),
  t('months.march'),
  t('months.april'),
  t('months.may'),
  t('months.june'),
  t('months.july'),
  t('months.august'),
  t('months.september'),
  t('months.october'),
  t('months.november'),
  t('months.december'),
]
