import Config from 'react-native-config'
import ImageViewing from 'react-native-image-viewing'

import { Path } from 'src/enums'
import { useToggle } from 'src/hooks'
import { t } from 'src/i18n'
import { type Collection } from 'src/types'

import {
  Author,
  Card,
  ImageWrapper,
  Info,
  StyledImage,
  Title,
  Year,
} from './styles'

interface Props {
  item: Collection
}

export const CollectionCard = ({ item }: Props) => {
  const { visible, open, close } = useToggle()
  const imageUrl = `${Config.BASE_URL}${Path.GET_IMAGE}${item.imageId}`

  return (
    <>
      <Card>
        <ImageWrapper onPress={open}>
          <StyledImage source={{ uri: imageUrl }} resizeMode="cover" />
        </ImageWrapper>
        <Info>
          <Author numberOfLines={1}>
            {t('collection.author', { value: item.author })}
          </Author>
          <Title numberOfLines={2}>{item.name}</Title>
          <Year numberOfLines={1}>
            {t('collection.date', { value: item.year })}
          </Year>
        </Info>
      </Card>
      <ImageViewing
        images={[{ uri: imageUrl }]}
        visible={visible}
        onRequestClose={close}
        imageIndex={0}
        doubleTapToZoomEnabled={false}
        presentationStyle="overFullScreen"
        swipeToCloseEnabled={false}
      />
    </>
  )
}
