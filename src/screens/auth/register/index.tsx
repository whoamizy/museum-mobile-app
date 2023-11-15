import { Container, Dismissable, Wrapper } from 'src/components'

import { RegisterForm } from './form'

export const RegisterScreen = () => {
  return (
    <Dismissable>
      <Wrapper>
        <Container>
          <RegisterForm />
        </Container>
      </Wrapper>
    </Dismissable>
  )
}
