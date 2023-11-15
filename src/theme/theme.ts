import { colors } from './colors'
import { fonts } from './fonts'

export const theme = {
  ...colors,
  font: fonts,
  icons: {
    primary: colors.black,
  },
  tabbar: {
    active: colors.red_dark,
    inactive: colors.black,
  },
  background: colors.white,
}
