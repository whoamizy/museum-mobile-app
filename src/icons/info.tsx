import Svg, { Path, type SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components/native'

export const InfoIcon = ({
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
        d="m5.061 20.045.44-.607-.44.607ZM3.955 18.94l.607-.44-.607.44Zm16.09 0-.607-.44.607.44Zm-1.106 1.106-.44-.607.44.607Zm0-16.09-.44.607.44-.607Zm1.106 1.106-.607.44.607-.44ZM5.061 3.955l.44.607-.44-.607ZM3.955 5.06l.607.44-.607-.44ZM12.75 7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm.75 7.25c-1.892 0-3.25-.001-4.302-.115-1.038-.113-1.688-.328-2.196-.697l-.882 1.214c.807.586 1.75.848 2.916.974 1.152.125 2.606.124 4.464.124v-1.5ZM2.25 12c0 1.858-.001 3.312.124 4.463.126 1.166.388 2.11.974 2.917l1.214-.882c-.37-.508-.585-1.158-.697-2.196-.114-1.052-.115-2.41-.115-4.302h-1.5Zm3.252 7.438a4.25 4.25 0 0 1-.94-.94l-1.214.882a5.75 5.75 0 0 0 1.272 1.272l.882-1.214ZM20.25 12c0 1.892-.001 3.25-.115 4.302-.113 1.038-.328 1.688-.697 2.196l1.214.882c.586-.807.848-1.75.974-2.916.125-1.152.124-2.606.124-4.464h-1.5ZM12 21.75c1.858 0 3.312.001 4.463-.124 1.166-.126 2.11-.388 2.917-.974l-.882-1.214c-.508.37-1.158.585-2.196.697-1.052.114-2.41.115-4.302.115v1.5Zm7.438-3.252c-.262.36-.58.678-.94.94l.882 1.214a5.749 5.749 0 0 0 1.272-1.272l-1.214-.882ZM12 3.75c1.892 0 3.25.001 4.302.115 1.038.112 1.688.328 2.196.697l.882-1.214c-.807-.586-1.75-.848-2.916-.974-1.152-.125-2.606-.124-4.464-.124v1.5ZM21.75 12c0-1.858.001-3.312-.124-4.464-.126-1.165-.388-2.11-.974-2.916l-1.214.882c.37.508.585 1.158.697 2.196.114 1.052.115 2.41.115 4.302h1.5Zm-3.252-7.438c.36.262.678.58.94.94l1.214-.882a5.75 5.75 0 0 0-1.272-1.272l-.882 1.214ZM12 2.25c-1.858 0-3.312-.001-4.464.124-1.165.126-2.11.388-2.916.974l.882 1.214c.508-.37 1.158-.585 2.196-.697C8.75 3.751 10.108 3.75 12 3.75v-1.5ZM3.75 12c0-1.892.001-3.25.115-4.302.112-1.038.328-1.688.697-2.196L3.348 4.62c-.586.807-.848 1.75-.974 2.916C2.249 8.688 2.25 10.142 2.25 12h1.5Zm.87-8.652A5.75 5.75 0 0 0 3.348 4.62l1.214.882c.262-.36.58-.678.94-.94L4.62 3.348ZM11.25 7v6h1.5V7h-1.5ZM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </Svg>
  )
}
