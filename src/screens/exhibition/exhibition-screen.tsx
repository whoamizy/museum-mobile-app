import React from 'react'
import { ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { useGetOneExhibition } from 'src/api'
import { Container, Loader, Separator, Wrapper } from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { type ExhibitionProp } from 'src/navigation/types'

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

  const {
    params: { id },
  } = useRoute<ExhibitionProp>()

  const { data: exhibition } = useGetOneExhibition(id)

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
      <ScrollView>
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
      </ScrollView>
      <StyledButton
        title={t('exhibitions.item.getTicket')}
        style={{ paddingBottom }}
      />
    </Wrapper>
  )
}
