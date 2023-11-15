import { useCallback } from 'react'
import { Formik } from 'formik'

import { useLoginMutation } from 'src/api'
import { PersistData } from 'src/enums'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type FormikSubmit, type LoginPayload } from 'src/types'
import { storage } from 'src/utils'

import { loginSchema } from '../schemas'
import { LoginView } from './view'

const initialValues: LoginPayload = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const { replace } = useNavigation()
  const { mutateAsync: login } = useLoginMutation()

  const onSubmit: FormikSubmit<LoginPayload> = useCallback(
    (values, helpers) => {
      login(values, {
        onSuccess: (data) => {
          storage.set(PersistData.TOKEN, data?.token ?? '')
          replace(ROUTES.MAIN_NAVIGATOR)
        },
        onSettled: () => {
          helpers.setSubmitting(false)
        },
        onError: () => {
          helpers.setFieldTouched('email', true, false)
          helpers.setFieldTouched('password', true, false)
          helpers.setFieldError('email', t('errors.invalidEmailOrPassword'))
          helpers.setFieldError('password', t('errors.invalidEmailOrPassword'))
        },
      })
    },
    [login, replace],
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
      component={LoginView}
    />
  )
}
