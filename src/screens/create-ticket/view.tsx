import { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import format from 'date-fns/format'
import { type FormikProps } from 'formik'
import { useTheme } from 'styled-components/native'

import { useGetFreeTimes, useGetOneExhibition } from 'src/api'
import {
  Button,
  Container,
  Loader,
  Month,
  Separator,
  TimeChip,
  Wrapper,
} from 'src/components'
import { useTickets } from 'src/context'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { type CreateTicketPayload } from 'src/types'
import { filterFreeTimes } from 'src/utils'

import {
  Address,
  CalendarWrapper,
  ChipWrapper,
  Content,
  EmptyText,
  EmptyWrapper,
  Info,
  LoaderWrapper,
  Price,
  Title,
} from './styles'

const ListEmptyContent = () => (
  <EmptyWrapper>
    <EmptyText>{t('tickets.notFound')}</EmptyText>
  </EmptyWrapper>
)

export const CreateTicketView = ({
  values,
  submitForm,
  setFieldValue,
  isSubmitting,
}: FormikProps<CreateTicketPayload>) => {
  const scrollViewRef = useRef<ScrollView>(null)
  const paddingBottom = usePaddingBottom()
  const { red_dark } = useTheme()

  const { selected } = useTickets()
  const formattedDate = format(Date.parse(selected), 'yyyy-MM-dd')

  const { date, time, exhibition: id } = values

  const isDisabled = isSubmitting || !date || !time

  const [currentTime, setCurrentTime] = useState<string>()

  const scrollToStart = () => {
    scrollViewRef.current?.scrollTo({ x: 0, animated: true })
  }

  useEffect(() => {
    setCurrentTime(undefined)
    setFieldValue('date', formattedDate)
    scrollToStart()
  }, [formattedDate, selected, setFieldValue])

  const handleChangeTime = (selectedTime: string) => {
    setFieldValue('time', selectedTime)
    setCurrentTime(selectedTime)
  }

  const { data: freeTimes, isLoading } = useGetFreeTimes({
    exhibition: id,
    date: formattedDate,
  })
  const { data: exhibition } = useGetOneExhibition(id)

  const filteredTimes = filterFreeTimes(freeTimes, formattedDate)

  return (
    <Wrapper>
      <Container>
        <Content>
          <View>
            <ScrollView>
              <CalendarWrapper>
                <Month />
              </CalendarWrapper>
              <ScrollView style={styles.content} horizontal ref={scrollViewRef}>
                {isLoading && (
                  <LoaderWrapper>
                    <Loader color={red_dark} size="small" />
                  </LoaderWrapper>
                )}
                {!!filteredTimes && (
                  <>
                    {filteredTimes.length === 0 && <ListEmptyContent />}
                    {filteredTimes.map((item, index) => (
                      <ChipWrapper key={item} hasMargin={index > 0}>
                        <TimeChip
                          label={item}
                          selected={currentTime === item}
                          onPress={() => handleChangeTime(item)}
                        />
                      </ChipWrapper>
                    ))}
                  </>
                )}
              </ScrollView>
              {!!exhibition && (
                <Info>
                  <Separator />
                  <Title>{exhibition.name}</Title>
                  <Address>{exhibition.address}</Address>
                  <Price>
                    {t('exhibitions.item.price', { value: exhibition.price })}
                  </Price>
                </Info>
              )}
            </ScrollView>
          </View>
          <Button
            style={{ paddingBottom }}
            title={t('tickets.create.label')}
            isDisabled={isDisabled}
            loading={isSubmitting}
            onPress={submitForm}
          />
        </Content>
      </Container>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
})
