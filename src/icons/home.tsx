import Svg, { SvgProps, Path } from "react-native-svg"
import { useTheme } from "styled-components/native"

export const HomeIcon = (props: SvgProps) => {
  const { icons } = useTheme()

  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        stroke={icons.primary}
        strokeWidth={1.5}
        d="M6.294 4.966c2.666-1.938 4-2.907 5.523-2.963.122-.004.244-.004.366 0 1.523.056 2.857 1.025 5.523 2.963 2.667 1.937 4 2.906 4.524 4.337.042.115.08.231.114.349.417 1.465-.092 3.033-1.11 6.168l-1.722 5.296a2.043 2.043 0 0 1-3.985-.63v-2.75a1.917 1.917 0 0 0-1.917-1.916h-3.22a1.917 1.917 0 0 0-1.917 1.916v2.75a2.043 2.043 0 0 1-3.985.63L2.767 15.82c-1.019-3.135-1.528-4.703-1.11-6.168.033-.118.07-.234.113-.35.523-1.43 1.857-2.399 4.524-4.336Z"
      />
    </Svg>
  )
}
