import React from 'react'
import { ImageBackground } from 'react-native'
import Config from 'react-native-config'
import styled, { useTheme } from 'styled-components/native'

import { Path } from 'src/enums'
import { ArrowIcon } from 'src/icons'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type Exhibition } from 'src/types'
import { ITEM_WIDTH } from 'src/utils'

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
  justify-content: flex-end;
`

const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.secondary};
  max-width: 75%;
`

const LinkWrapper = styled.View`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

interface Props {
  item: Exhibition
}

export const ExhibitionsCard = ({ item }: Props) => {
  const { white } = useTheme()
  const { navigate } = useNavigation()
  const imageUrl = `${Config.BASE_URL}${Path.GET_IMAGE}${item.images[0]}`

  const navigateToTicketsHandler = () => {
    navigate(ROUTES.EXHIBITION, { id: item._id })
  }

  return (
    <Card onPress={navigateToTicketsHandler}>
      <Background source={{ uri: imageUrl }} resizeMode="cover">
        <Title numberOfLines={1}>{item.name}</Title>
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
