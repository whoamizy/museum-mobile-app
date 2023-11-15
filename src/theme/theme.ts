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
  text: {
    primary: colors.black,
    error: colors.red_dark,
    accent: colors.red_dark,
  },
  input: {
    bg: {
      valid: colors.white,
      invalid: colors.red_light,
    },
    border: {
      valid: colors.grey_medium,
      invalid: colors.red_dark,
    },
    text: {
      valid: colors.black,
      invalid: colors.red_dark,
    },
    placeholder: {
      valid: colors.grey_medium,
      invalid: colors.red_dark,
    },
  },
  button: {
    bg: {
      active: colors.red_dark,
      disabled: colors.red_extra_light,
    },
    title: {
      active: colors.white,
      disabled: colors.grey_light,
    },
  },
}
