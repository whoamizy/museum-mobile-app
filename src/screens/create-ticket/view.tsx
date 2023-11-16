import { useEffect, useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import addHours from 'date-fns/addHours'
import format from 'date-fns/format'
import { type FormikProps } from 'formik'

import { useGetFreeTimes } from 'src/api'
import { Button, Container, Month, TimeChip, Wrapper } from 'src/components'
import { useTickets } from 'src/context'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { type CreateTicketPayload } from 'src/types'
import { timezoneOffset } from 'src/utils'

export const CreateTicketView = ({
  values,
  submitForm,
  setFieldValue,
  isSubmitting,
}: FormikProps<CreateTicketPayload>) => {
  const scrollViewRef = useRef<ScrollView>(null)
  const paddingBottom = usePaddingBottom()

  const { selected } = useTickets()
  const formattedDate = format(Date.parse(selected), 'yyy-MM-dd')

  const { date, time, exhibition } = values

  const isDisabled = isSubmitting || !date || !time

  const [currentTime, setCurrentTime] = useState('')

  const scrollToStart = () => {
    scrollViewRef.current?.scrollTo({ x: 0, animated: true })
  }

  useEffect(() => {
    setCurrentTime('')
    setFieldValue('date', formattedDate)
    scrollToStart()
  }, [formattedDate, selected, setFieldValue])

  const handleChangeTime = (selectedTime: string) => {
    const formattedSelectedTime = format(new Date(selectedTime), 'HH:mm')
    setFieldValue('time', formattedSelectedTime)
    setCurrentTime(formattedSelectedTime)
  }

  const { data: freeTimes } = useGetFreeTimes({
    exhibition,
    date: formattedDate,
  })

  return (
    <Wrapper>
      <Container>
        <Month />
        <ScrollView horizontal ref={scrollViewRef}>
          {freeTimes?.map((item) => (
            <TimeChip
              key={item}
              label={format(addHours(new Date(item), timezoneOffset), 'HH:mm')}
              selected={currentTime === format(new Date(item), 'HH:mm')}
              onPress={() => handleChangeTime(item)}
            />
          ))}
        </ScrollView>
        <Button
          style={{ paddingBottom }}
          title={t('tickets.create.label')}
          isDisabled={isDisabled}
          loading={isSubmitting}
          onPress={submitForm}
        />
      </Container>
    </Wrapper>
  )
}
