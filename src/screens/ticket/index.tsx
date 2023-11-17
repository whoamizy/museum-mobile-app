import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { type TicketProp } from 'src/navigation/types'

export const TicketScreen = () => {
  const {
    params: { id },
  } = useRoute<TicketProp>()

  return (
    <View>
      <Text>TicketScreen for {id}</Text>
    </View>
  )
}
