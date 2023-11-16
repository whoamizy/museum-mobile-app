import React, { type ReactNode } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { css } from 'styled-components/native'

import { ArrowIcon } from 'src/icons'
import { headerPaddingTop } from 'src/utils'

import { Dismissable } from './dismissable'

interface Props {
  hideBack?: boolean
  colorArrow?: string
  onBack?: () => void
  title?: string
  Logo?: ReactNode
  maxTitleWidth?: string | number
  EndComponent?: ReactNode
  StartComponent?: ReactNode
}

const absoluteStyle = css`
  position: absolute;
  bottom: 8px;
`
const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: flex-start;
  padding-top: ${headerPaddingTop}px;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`
const LogoBlock = styled.View`
  margin-top: 30px;
`

const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.font.montserrat600};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.text.primary};
`
const Block = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
`

const LeftBlock = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
`

const ArrowWrapper = styled.TouchableOpacity`
  z-index: 99;
  padding-horizontal: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`

const RightBlock = styled.View`
  ${absoluteStyle};
  right: 16px;
`

export const Header = ({
  onBack,
  title,
  colorArrow,
  StartComponent,
  EndComponent,
  hideBack,
  Logo,
  ...props
}: Props) => {
  const shouldShowBack = !StartComponent && !hideBack

  return (
    <Dismissable>
      <Container {...props}>
        <LeftBlock>
          {shouldShowBack ? (
            <ArrowWrapper onPress={onBack} activeOpacity={0.5}>
              <ArrowIcon color={colorArrow} />
            </ArrowWrapper>
          ) : (
            <View>{StartComponent}</View>
          )}
        </LeftBlock>
        <Block>
          {title && <Title numberOfLines={1}>{title}</Title>}
          {Logo && <LogoBlock>{Logo}</LogoBlock>}
        </Block>
        <RightBlock>
          <View>{EndComponent}</View>
        </RightBlock>
      </Container>
    </Dismissable>
  )
}
