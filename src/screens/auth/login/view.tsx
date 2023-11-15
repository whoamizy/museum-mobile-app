import { type FormikProps } from 'formik'

import { Button, InputText } from 'src/components'
import { t } from 'src/i18n'
import { type LoginPayload } from 'src/types'

import { Inputs, Wrapper } from '../styles'

export const LoginView = ({
  values,
  errors,
  touched,
  submitForm,
  setFieldValue,
  isSubmitting,
  isValid,
}: FormikProps<LoginPayload>) => {
  const { email, password } = values
  const { email: emailError, password: passwordError } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  return (
    <Wrapper>
      <Inputs>
        <InputText
          placeholder={t('auth.emailPlaceholder')}
          value={email}
          onChangeText={(value) => setFieldValue('email', value)}
          label={t('auth.email')}
          error={shouldDisplayError ? emailError : undefined}
        />
        <InputText
          secureTextEntry
          placeholder={t('auth.passwordPlaceholder')}
          value={password}
          onChangeText={(value) => setFieldValue('password', value)}
          label={t('auth.password')}
          error={shouldDisplayError ? passwordError : undefined}
        />
      </Inputs>
      <Button
        title={t('auth.login')}
        isDisabled={isDisabled}
        loading={isSubmitting}
        onPress={submitForm}
      />
    </Wrapper>
  )
}
