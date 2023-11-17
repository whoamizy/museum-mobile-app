import { useCallback } from 'react'
import Toast from 'react-native-toast-message'
import { useRoute } from '@react-navigation/native'
import format from 'date-fns/format'
import { Formik } from 'formik'

import { useCreateTicketMutation } from 'src/api'
import { useTickets, useUser } from 'src/context'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { ROUTES } from 'src/navigation/routes'
import { type ExhibitionProp } from 'src/navigation/types'
import { type CreateTicketPayload, type FormikSubmit } from 'src/types'
import { queryClient } from 'src/utils'

import { CreateTicketView } from './view'

export const CreateTicketContent = () => {
  const {
    params: { id },
  } = useRoute<ExhibitionProp>()
  const { mutateAsync: create } = useCreateTicketMutation()
  const { replace } = useNavigation()
  const { selected } = useTickets()
  const { user } = useUser()

  const initialValues: CreateTicketPayload = {
    user: user?._id,
    date: format(new Date(selected), 'yyy-MM-dd'),
    time: '',
    exhibition: id,
  }

  const onSubmit: FormikSubmit<CreateTicketPayload> = useCallback(
    (values, helpers) => {
      create(values, {
        onSuccess: () => {
          Toast.show({ type: 'success', text1: t('tickets.create.success') })
          queryClient.refetchQueries({
            queryKey: [
              'free-times',
              { date: values.date, exhibition: values.exhibition },
            ],
            type: 'active',
          })
          replace(ROUTES.TAB)
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
