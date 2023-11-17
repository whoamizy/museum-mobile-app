import Svg, { Path, type SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const TicketIcon = ({
  width = 24,
  height = 24,
  color,
  ...props
}: SvgProps) => {
  const { icons } = useTheme()

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        stroke={color ?? icons.primary}
        strokeWidth={1.5}
        d="M22 8.444A4.444 4.444 0 0 0 17.556 4H6.444A4.444 4.444 0 0 0 2 8.444c0 .544.312 1.039.801 1.274l.488.234c1.718.825 1.718 3.271 0 4.096l-.488.234c-.49.235-.801.73-.801 1.274A4.444 4.444 0 0 0 6.444 20h11.112A4.444 4.444 0 0 0 22 15.556c0-.544-.312-1.039-.801-1.274l-.488-.234c-1.718-.825-1.718-3.271 0-4.096l.488-.234c.49-.235.801-.73.801-1.274Z"
      />
      <Path
        stroke={color ?? icons.primary}
        strokeDasharray="2 3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M10 4v16"
      />
    </Svg>
  )
}
