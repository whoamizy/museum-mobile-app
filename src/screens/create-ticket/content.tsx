import { useCallback } from 'react'
import Toast from 'react-native-toast-message'
import { useRoute } from '@react-navigation/native'
import { Formik } from 'formik'

import { useCreateTicketMutation } from 'src/api'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { APP_ROUTES } from 'src/navigation/routes'
import { type ExhibitionProp } from 'src/navigation/types'
import { type CreateTicketPayload, type FormikSubmit } from 'src/types'

import { CreateTicketView } from './view'

export const CreateTicketContent = () => {
  const {
    params: { id },
  } = useRoute<ExhibitionProp>()
  const { mutateAsync: create } = useCreateTicketMutation()
  const { replace } = useNavigation()

  const initialValues: CreateTicketPayload = {
    date: '',
    time: '',
    exhibition: id,
  }

  const onSubmit: FormikSubmit<CreateTicketPayload> = useCallback(
    (values, helpers) => {
      create(values, {
        onSuccess: () => {
          Toast.show({ type: 'success', text1: t('tickets.create.success') })
          replace(APP_ROUTES.HOME)
        },
        onSettled: () => {
          helpers.setSubmitting(false)
        },
        onError: () => {
          Toast.show({ type: 'error', text1: t('tickets.create.error') })
        },
      })
    },
    [create, replace],
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={CreateTicketView}
    />
  )
}
