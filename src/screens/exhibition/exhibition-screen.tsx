import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { useGetOneExhibition } from 'src/api'
import { Container, Loader, Separator, Wrapper } from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { type ExhibitionProp } from 'src/navigation/types'
import { queryClient } from 'src/utils'

import { ExhibitionSlider } from './exhibition-slider'
import {
  Address,
  Description,
  LoaderWrapper,
  Price,
  StyledButton,
  Title,
} from './styles'

export const ExhibitionScreen = () => {
  const paddingBottom = usePaddingBottom()
  const { red_dark } = useTheme()
  const [refreshing, setRefreshing] = useState(false)

  const {
    params: { id },
  } = useRoute<ExhibitionProp>()

  const { data: exhibition } = useGetOneExhibition(id)

  const onRefresh = () => {
    setRefreshing(true)
    queryClient.refetchQueries({
      queryKey: ['exhibitions', id],
      type: 'active',
    })
    setRefreshing(false)
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{ paddingBottom }}>
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
        title={t('exhibitions.item.getTicket')}
        style={{ paddingBottom }}
      />
    </Wrapper>
  )
}
