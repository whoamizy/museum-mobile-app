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
    secondary: colors.white,
    third: colors.grey_medium,
    error: colors.red_dark,
    accent: colors.red_dark,
    accent_light: colors.red_medium,
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
  separator: colors.red_light,
  pop_up: {
    bg: colors.white,
    title: colors.black,
    accept_red: colors.red_dark,
    cancel: colors.black,
  },
  overlay: colors.grey_transparent,
  chips: {
    time: {
      bg: {
        active: colors.red_dark,
        inactive: colors.grey_light,
      },
      text: {
        active: colors.white,
        inactive: colors.red_dark,
      },
    },
  },
  calendar: {
    week_day: colors.red_dark,
    day: {
      bg: {
        active: colors.red_dark,
        inactive: colors.grey_light,
      },
      text: {
        active: colors.white,
        inactive: colors.red_dark,
      },
    },
  },
}
