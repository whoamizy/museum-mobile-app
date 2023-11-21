import Svg, { Path, type SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const QrCodeIcon = ({
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
      fill="none"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        fill={color ?? icons.primary}
        d="M3 16h-.75H3Zm.75-1a.75.75 0 0 0-1.5 0h1.5ZM9 21.75a.75.75 0 0 0 0-1.5v1.5ZM8 21v-.75.75ZM9 3.75a.75.75 0 0 0 0-1.5v1.5ZM2.25 9a.75.75 0 0 0 1.5 0h-1.5ZM21 8h-.75.75Zm-.75 1a.75.75 0 0 0 1.5 0h-1.5ZM15 2.25a.75.75 0 0 0 0 1.5v-1.5ZM16 3v-.75V3Zm0 18v-.75.75Zm-1-.75a.75.75 0 0 0 0 1.5v-1.5ZM21.75 15a.75.75 0 0 0-1.5 0h1.5ZM21 16h.75H21ZM3.75 16v-1h-1.5v1h1.5ZM9 20.25H8v1.5h1v-1.5ZM2.25 16A5.75 5.75 0 0 0 8 21.75v-1.5A4.25 4.25 0 0 1 3.75 16h-1.5ZM8 3.75h1v-1.5H8v1.5ZM3.75 9V8h-1.5v1h1.5ZM8 2.25A5.75 5.75 0 0 0 2.25 8h1.5A4.25 4.25 0 0 1 8 3.75v-1.5ZM20.25 8v1h1.5V8h-1.5ZM15 3.75h1v-1.5h-1v1.5ZM21.75 8A5.75 5.75 0 0 0 16 2.25v1.5A4.25 4.25 0 0 1 20.25 8h1.5ZM16 20.25h-1v1.5h1v-1.5ZM20.25 15v1h1.5v-1h-1.5ZM16 21.75A5.75 5.75 0 0 0 21.75 16h-1.5A4.25 4.25 0 0 1 16 20.25v1.5ZM8 9.25c-.493 0-.787-.002-.997-.03a.706.706 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47.334.045.747.043 1.197.043v-1.5ZM5.25 8c0 .45-.002.863.043 1.197.048.356.16.731.47 1.04l1.06-1.06-.001-.003a.706.706 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997h-1.5Zm4 0c0 .493-.002.787-.03.997a.706.706 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04.045-.334.043-.747.043-1.197h-1.5ZM8 10.75c.45 0 .863.002 1.197-.043.356-.048.731-.16 1.04-.47l-1.06-1.06-.003.001a.706.706 0 0 1-.177.042c-.21.028-.504.03-.997.03v1.5Zm0-4c.493 0 .787.002.997.03a.706.706 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47C8.863 5.248 8.45 5.25 8 5.25v1.5ZM10.75 8c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.706.706 0 0 1 .042.177c.028.21.03.504.03.997h1.5ZM8 5.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.706.706 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5ZM6.75 8c0-.493.002-.787.03-.997a.706.706 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5ZM16 9.25c-.493 0-.787-.002-.997-.03a.705.705 0 0 1-.177-.042l-.003-.001-1.06 1.06c.309.31.684.422 1.04.47.334.045.747.043 1.197.043v-1.5ZM13.25 8c0 .45-.002.863.043 1.197.048.356.16.731.47 1.04l1.06-1.06-.001-.003a.704.704 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997h-1.5Zm4 0c0 .493-.002.787-.03.997a.704.704 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04.045-.334.043-.747.043-1.197h-1.5ZM16 10.75c.45 0 .863.002 1.197-.043.356-.048.731-.16 1.04-.47l-1.06-1.06-.003.001a.705.705 0 0 1-.177.042c-.21.028-.504.03-.997.03v1.5Zm0-4c.493 0 .787.002.997.03a.705.705 0 0 1 .177.042l.003.001 1.06-1.06c-.309-.31-.684-.422-1.04-.47-.334-.045-.747-.043-1.197-.043v1.5ZM18.75 8c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.704.704 0 0 1 .042.177c.028.21.03.504.03.997h1.5ZM16 5.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.705.705 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5ZM14.75 8c0-.493.002-.787.03-.997a.704.704 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5ZM16 17.25c-.493 0-.787-.002-.997-.03a.702.702 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47.334.045.747.043 1.197.043v-1.5ZM13.25 16c0 .45-.002.863.043 1.197.048.356.16.731.47 1.04l1.06-1.06-.001-.003a.702.702 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997h-1.5Zm4 0c0 .493-.002.787-.03.997a.702.702 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04.045-.334.043-.747.043-1.197h-1.5ZM16 18.75c.45 0 .863.002 1.197-.043.356-.048.731-.16 1.04-.47l-1.06-1.06-.003.001a.702.702 0 0 1-.177.042c-.21.028-.504.03-.997.03v1.5Zm0-4c.493 0 .787.002.997.03a.702.702 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47-.334-.045-.747-.043-1.197-.043v1.5ZM18.75 16c0-.45.002-.863-.043-1.197-.048-.356-.16-.731-.47-1.04l-1.06 1.06.001.003a.702.702 0 0 1 .042.177c.028.21.03.504.03.997h1.5ZM16 13.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.702.702 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5ZM14.75 16c0-.493.002-.787.03-.997a.702.702 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5Z"
      />
    </Svg>
  )
}