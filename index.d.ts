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

declare module 'react-native-config' {
  export interface NativeConfig extends Record<string, string | undefined> {
    BASE_URL: string
    STORAGE_KEY: string
    ANDROID_VERSION_CODE: string
    ANDROID_VERSION_NAME: string
    MARKETING_VERSION: string
    APP_NAME: string
    API_KEY: string
    AUTH_DOMAIN: string
    PROJECT_ID: string
    STORAGE_BUCKET: string
    MESSAGING_SENDER_ID: string
    APP_ID: string
    MEASURMENT_ID: string
  }
  export const Config: NativeConfig
}
