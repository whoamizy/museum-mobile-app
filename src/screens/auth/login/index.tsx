import { Container, Dismissable, Wrapper } from 'src/components'

import { LoginForm } from './form'

export const LoginScreen = () => {
  return (
    <Dismissable>
      <Wrapper>
        <Container>
          <LoginForm />
        </Container>
      </Wrapper>
    </Dismissable>
  )
}
