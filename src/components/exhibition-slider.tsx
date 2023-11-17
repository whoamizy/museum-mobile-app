import React, { useCallback } from 'react'
import { FlatList, type ListRenderItem, StyleSheet, View } from 'react-native'
import Config from 'react-native-config'
import styled from 'styled-components/native'

import { Path } from 'src/enums'
import { ITEM_WIDTH } from 'src/utils'

export const ImageWrapper = styled.View`
  width: ${ITEM_WIDTH}px;
  height: 200px;
  background-color: ${({ theme }) => theme.red_light};
  overflow: hidden;
  border-radius: 16px;
`

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
`

interface Props {
  images: string[]
}

export const ExhibitionSlider = ({ images }: Props) => {
  const renderItem: ListRenderItem<string> = useCallback(({ item }) => {
    const imageUrl = `${Config.BASE_URL}${Path.GET_IMAGE}${item}`

    return (
      <ImageWrapper>
        <StyledImage source={{ uri: imageUrl }} />
      </ImageWrapper>
    )
  }, [])

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={images}
        renderItem={renderItem}
        decelerationRate="fast"
        snapToInterval={ITEM_WIDTH + 8}
        contentContainerStyle={styles.content}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: 8,
    paddingHorizontal: 16,
  },
})
