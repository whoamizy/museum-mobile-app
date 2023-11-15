import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props {
  defaultOffset?: number
  extraOffset?: number
}

export const usePaddingBottom = (props?: Props) => {
  const defaultOffset = props?.defaultOffset ?? 16
  const extraOffset = props?.extraOffset ?? 0
  const { bottom } = useSafeAreaInsets()
  const offsetBottom = bottom === 0 ? defaultOffset : bottom
  const paddingBottom = offsetBottom + extraOffset

  return paddingBottom
}
