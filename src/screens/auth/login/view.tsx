import { TouchableOpacity, View } from 'react-native'
import { type FormikProps } from 'formik'

import { Button, ButtonContainer, InputText } from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { AUTH_ROUTES } from 'src/navigation/routes'
import { type LoginPayload } from 'src/types'

import {
  CallToAction,
  InfoContent,
  Inputs,
  Logo,
  Question,
  Wrapper,
} from '../styles'

export const LoginView = ({
  values,
  errors,
  touched,
  submitForm,
  setFieldValue,
  isSubmitting,
  isValid,
}: FormikProps<LoginPayload>) => {
  const paddingBottom = usePaddingBottom({ extraOffset: 8 })
  const { replace } = useNavigation()

  const { email, password } = values
  const { email: emailError, password: passwordError } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  const navigateToRegister = () => {
    replace(AUTH_ROUTES.REGISTER)
  }

  return (
    <Wrapper>
      <View>
        <InfoContent>
          <Logo source={require('src/assets/images/logo.png')} />
          <Question>{t('auth.login.question')}</Question>
          <TouchableOpacity onPress={navigateToRegister}>
            <CallToAction>{t('auth.login.call_to_action')}</CallToAction>
          </TouchableOpacity>
        </InfoContent>
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
      </View>
      <ButtonContainer>
        <Button
          style={{ paddingBottom }}
          title={t('auth.login.button')}
          isDisabled={isDisabled}
          loading={isSubmitting}
          onPress={submitForm}
        />
      </ButtonContainer>
    </Wrapper>
  )
}
