import React from 'react'
import styled from 'styled-components/native'

import { t } from 'src/i18n'

const Wrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-horizontal: 10px;
  margin-bottom: 16px;
`

const WeekDay = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.calendar.week_day};
`

export const WeekRow = () => (
  <Wrapper>
    <WeekDay>{t('week.mon')}</WeekDay>
    <WeekDay>{t('week.tues')}</WeekDay>
    <WeekDay>{t('week.wed')}</WeekDay>
    <WeekDay>{t('week.thurs')}</WeekDay>
    <WeekDay>{t('week.fri')}</WeekDay>
    <WeekDay>{t('week.sat')}</WeekDay>
    <WeekDay>{t('week.sun')}</WeekDay>
  </Wrapper>
)
