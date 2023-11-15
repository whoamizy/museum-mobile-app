import { TouchableOpacity, View } from 'react-native'
import { type FormikProps } from 'formik'

import { Button, InputText } from 'src/components'
import { usePaddingBottom } from 'src/hooks'
import { t } from 'src/i18n'
import { useNavigation } from 'src/navigation/hooks'
import { AUTH_ROUTES } from 'src/navigation/routes'
import { type RegisterPayload } from 'src/types'

import {
  CallToAction,
  InfoContent,
  Inputs,
  Logo,
  Question,
  Wrapper,
} from '../styles'

export const RegisterView = ({
  values,
  errors,
  touched,
  submitForm,
  setFieldValue,
  isSubmitting,
  isValid,
}: FormikProps<RegisterPayload>) => {
  const paddingBottom = usePaddingBottom()
  const { replace } = useNavigation()

  const { username, email, password } = values
  const {
    username: usernameError,
    email: emailError,
    password: passwordError,
  } = errors

  const isDisabled = isSubmitting || !isValid

  const shouldDisplayError = !!touched && !!errors

  const navigateToLogin = () => {
    replace(AUTH_ROUTES.LOGIN)
  }

  return (
    <Wrapper>
      <View>
        <InfoContent>
          <Logo source={require('src/assets/images/logo.png')} />
          <Question>{t('auth.register.question')}</Question>
          <TouchableOpacity onPress={navigateToLogin}>
            <CallToAction>{t('auth.register.call_to_action')}</CallToAction>
          </TouchableOpacity>
        </InfoContent>
        <Inputs>
          <InputText
            placeholder={t('auth.usernamePlaceholder')}
            value={username}
            onChangeText={(value) => setFieldValue('username', value)}
            label={t('auth.username')}
            error={shouldDisplayError ? usernameError : undefined}
          />
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
      <Button
        style={{ paddingBottom }}
        title={t('auth.register.button')}
        isDisabled={isDisabled}
        loading={isSubmitting}
        onPress={submitForm}
      />
    </Wrapper>
  )
}
