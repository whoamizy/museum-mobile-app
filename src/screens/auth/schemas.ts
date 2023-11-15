import { object, string } from 'yup'

import { t } from 'src/i18n'

export const loginSchema = object().shape({
  email: string()
    .required(t('errors.required'))
    .test('Validate Email', t('errors.invalidEmail'), (value) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(String(value).toLowerCase())
    }),
  password: string()
    .required(t('errors.required'))
    .matches(/^\S*$/, t('errors.invalidPassword'))
    .min(8, t('errors.minPasswordLength', { value: 8 }))
    .max(30, t('errors.maxPasswordLength', { value: 30 })),
})
