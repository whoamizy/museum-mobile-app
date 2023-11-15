import { type theme } from 'src/theme'

type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'axios' {
  export interface AxiosRequestConfig extends AxiosConfig {
    shouldShowToast?: boolean
  }
}
