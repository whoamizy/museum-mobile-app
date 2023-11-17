import React from 'react'
import { TouchableOpacity } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import styled, { useTheme } from 'styled-components/native'

interface Props {
  selected: boolean
  label: string
  onPress(): void
}

const Container = styled(Animated.View)`
  padding: 12px 16px;
  border-radius: 16px;
`

const Label = styled(Animated.Text)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.montserrat600};
`

export const TimeChip = ({ selected, label, onPress }: Props) => {
  const { chips } = useTheme()

  const derivedSelected = useDerivedValue(() => {
    return withTiming(Number(selected), { duration: 150 })
  })

  const containerStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      derivedSelected.value,
      [0, 1],
      [chips.time.bg.inactive, chips.time.bg.active],
    )

    return {
      backgroundColor: bgColor,
    }
  })

  const labelStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      derivedSelected.value,
      [0, 1],
      [chips.time.text.inactive, chips.time.text.active],
    )

    return {
      color,
    }
  })

  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={containerStyle}>
        <Label style={labelStyle}>{label}</Label>
      </Container>
    </TouchableOpacity>
  )
}
