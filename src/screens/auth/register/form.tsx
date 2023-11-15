import { useCallback } from 'react'
import { Formik } from 'formik'

import { useRegistrationMutation } from 'src/api'
import { PersistData } from 'src/enums'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type FormikSubmit, type RegisterPayload } from 'src/types'
import { storage } from 'src/utils'

import { registerSchema } from '../schemas'
import { RegisterView } from './view'

const initialValues: RegisterPayload = {
  username: '',
  email: '',
  password: '',
}

export const RegisterForm = () => {
  const { replace } = useNavigation()
  const { mutateAsync: register } = useRegistrationMutation()

  const onSubmit: FormikSubmit<RegisterPayload> = useCallback(
    (values, helpers) => {
      register(values, {
        onSuccess: (data) => {
          storage.set(PersistData.TOKEN, data?.token ?? '')
          replace(ROUTES.MAIN_NAVIGATOR)
        },
        onSettled: () => {
          helpers.setSubmitting(false)
        },
        onError: () => {
          helpers.setFieldTouched('username', true, false)
          helpers.setFieldTouched('email', true, false)
          helpers.setFieldTouched('password', true, false)
          helpers.setFieldError('username', t('errors.incorrectUsername'))
          helpers.setFieldError('email', t('errors.incorrectEmailOrPassword'))
          helpers.setFieldError(
            'password',
            t('errors.incorrectEmailOrPassword'),
          )
        },
      })
    },
    [register, replace],
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registerSchema}
      component={RegisterView}
    />
  )
}
