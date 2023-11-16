import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

import { Separator } from 'src/components'
import { t } from 'src/i18n'
import { APP_VERSION, MUSEUM_LINK, openLink } from 'src/utils'

const textStyles = css`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
`

const Wrapper = styled.View`
  align-items: center;
  margin-vertical: 20px;
`

const Logo = styled.Image`
  border-radius: 6px;
  width: 70px;
  height: 70px;
  margin-bottom: 20px;
`

const Version = styled.Text`
  ${textStyles};
  color: ${({ theme }) => theme.text.primary};
  margin-bottom: 25px;
`

const Info = styled.Text`
  ${textStyles};
  margin-vertical: 20px;
  color: ${({ theme }) => theme.text.primary};
`

const CallToAction = styled.Text`
  ${textStyles};
  color: ${({ theme }) => theme.text.accent};
`

export const AboutAppContent = () => {
  return (
    <Wrapper>
      <Logo source={require('src/assets/images/logo.png')} />
      <Version>{t('aboutApp.appVersion', { value: APP_VERSION })}</Version>
      <Separator />
      <Info>{t('aboutApp.info')}</Info>
      <TouchableOpacity onPress={() => openLink(MUSEUM_LINK)}>
        <CallToAction>{t('aboutApp.goToSite')}</CallToAction>
      </TouchableOpacity>
    </Wrapper>
  )
}
