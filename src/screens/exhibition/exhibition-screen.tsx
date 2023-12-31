import React, { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { useGetOneExhibition } from 'src/api'
import {
  Container,
  ExhibitionSlider,
  Loader,
  Separator,
  Wrapper,
} from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type ExhibitionProp } from 'src/navigation/types'
import { queryClient } from 'src/utils'

import {
  Address,
  Description,
  LoaderWrapper,
  Price,
  StyledButton,
  Title,
} from './styles'

export const ExhibitionScreen = () => {
  const paddingBottom = usePaddingBottom({ extraOffset: 8 })
  const { red_dark } = useTheme()
  const [refreshing, setRefreshing] = useState(false)
  const { navigate } = useNavigation()

  const {
    params: { id },
  } = useRoute<ExhibitionProp>()

  const { data: exhibition } = useGetOneExhibition(id)

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({
      queryKey: ['exhibitions/id', { id }],
      type: 'active',
    })
    setRefreshing(false)
  }

  const navigateToCreateTicket = () => {
    navigate(ROUTES.CREATE_TICKET, { id })
  }

  if (!exhibition) {
    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader color={red_dark} />
        </LoaderWrapper>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <ExhibitionSlider images={exhibition.images} />
          <Container>
            <Title>{exhibition.name}</Title>
            <Address>{exhibition.address}</Address>
            <Price>
              {t('exhibitions.item.price', { value: exhibition.price })}
            </Price>
            <Separator />
            <Title>{t('exhibitions.item.description')}</Title>
            <Description>{exhibition.description}</Description>
          </Container>
        </View>
      </ScrollView>
      <StyledButton
        style={{ paddingBottom }}
        title={t('exhibitions.item.getTicket')}
        onPress={navigateToCreateTicket}
      />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
  },
})
