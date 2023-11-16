import React from 'react'
import { ImageBackground } from 'react-native'
import Config from 'react-native-config'
import styled, { useTheme } from 'styled-components/native'

import { Path } from 'src/enums'
import { ArrowIcon } from 'src/icons'
import { type NewsItem } from 'src/types'
import { ITEM_WIDTH, openLink } from 'src/utils'

const Card = styled.TouchableOpacity`
  width: ${ITEM_WIDTH}px;
  overflow: hidden;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.red_light};
  min-height: 155px;
`

const Background = styled(ImageBackground)`
  flex: 1;
  padding: 12px;
`

const Backdrop = styled.View`
  background-color: ${({ theme }) => theme.red_dark};
  width: ${ITEM_WIDTH / 2}px;
  height: 150px;
  border-bottom-right-radius: 100px;
  position: absolute;
  top: -30%;
  left: 0;
`

const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.white};
  max-width: 75%;
`

const LinkWrapper = styled.View`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

interface Props {
  item: NewsItem
}

export const NewsCard = ({ item }: Props) => {
  const { white } = useTheme()
  const imageUrl = `${Config.BASE_URL}${Path.GET_IMAGE}${item.imageId}`

  return (
    <Card onPress={() => openLink(item.link)}>
      <Background source={{ uri: imageUrl }} resizeMode="cover">
        <Backdrop />
        <Title numberOfLines={3}>{item.title}</Title>
        <LinkWrapper>
          <ArrowIcon
            style={{ transform: [{ rotate: '180deg' }] }}
            color={white}
            width={30}
            height={30}
          />
        </LinkWrapper>
      </Background>
    </Card>
  )
}
