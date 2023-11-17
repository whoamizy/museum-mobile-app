import React, { useCallback } from 'react'
import { isBefore, isToday } from 'date-fns'
import styled, { css } from 'styled-components/native'

interface UIProps {
  selected: boolean
}

const DayText = styled.Text<UIProps>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme, selected }) =>
    selected
      ? theme.calendar.day.text.active
      : theme.calendar.day.text.inactive};
`

const wrapperStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.Pressable<UIProps>`
  ${wrapperStyle};
  background-color: ${({ theme, selected }) =>
    selected ? theme.calendar.day.bg.active : theme.calendar.day.bg.inactive};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`
interface Props extends UIProps {
  date: string
  day: string
  setSelected?: (val: string) => void
}

export const Day = ({ date, day, selected, setSelected }: Props) => {
  const currentDate = new Date()
  const isCurrent = isToday(Date.parse(date))
  const isCurrentBefore = isBefore(new Date(date), currentDate)
  const isDisabled = !isCurrent && isCurrentBefore

  const handlePress = useCallback(() => {
    setSelected?.(date)
  }, [date, setSelected])

  return (
    <Wrapper onPress={handlePress} selected={selected} disabled={isDisabled}>
      <DayText selected={selected}>{day}</DayText>
    </Wrapper>
  )
}
