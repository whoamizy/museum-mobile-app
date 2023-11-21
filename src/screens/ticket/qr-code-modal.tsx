import QRCode from 'react-native-qrcode-svg'
import styled from 'styled-components/native'

import { Modal } from 'src/components'
import { t } from 'src/i18n'
import { type Ticket } from 'src/types'

const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  border-radius: 12px;
`

const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.montserrat600};
  color: ${({ theme }) => theme.text.primary};
  padding-bottom: 12px;
  text-align: center;
`

const CodeWrapper = styled.View`
  align-items: center;
`

interface Props {
  isVisible: boolean
  close(): void
  ticket?: Ticket
}

export const QrCodeModal = ({ isVisible, close, ticket }: Props) => {
  const formattedTicket = JSON.stringify(ticket)

  return (
    <Modal visible={isVisible} onClose={close}>
      <Wrapper>
        <Title>{t('tickets.item.qrCode.title')}</Title>
        <CodeWrapper>
          <QRCode value={formattedTicket} size={250} />
        </CodeWrapper>
      </Wrapper>
    </Modal>
  )
}
