import React, {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import parseISO from 'date-fns/parseISO'
import set from 'date-fns/set'
import noop from 'lodash/noop'

import { useCalendar } from 'src/hooks'
import { timezoneOffset } from 'src/utils'

interface Props {
  selected: string
}

interface Values extends Props {
  selectDate: (val: string) => void
}

const initialValues: Values = {
  selected: new Date().toISOString(),
  selectDate: noop,
}

const Context = createContext(initialValues)

export const useTickets = () => {
  const ctx = useContext(Context)

  if (!ctx) {
    throw new Error('useTickets cannot be used outside of TicketsProvider')
  }

  return ctx
}

export const TicketsProvider = ({
  children,
  selected,
}: PropsWithChildren<Props>) => {
  const initialDate = set(parseISO(selected), {
    milliseconds: 0,
    minutes: 0,
    seconds: 0,
    hours: 0 - timezoneOffset,
  })
  const { selected: calendarSelected, setSelected } = useCalendar(
    initialDate.toISOString(),
  )

  const handleSelectDate = useCallback(
    (date: string) => {
      setSelected(date)
    },
    [setSelected],
  )

  const value: Values = useMemo(
    () => ({
      selected: calendarSelected,
      selectDate: handleSelectDate,
    }),
    [calendarSelected, handleSelectDate],
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
