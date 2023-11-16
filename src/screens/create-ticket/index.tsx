import { Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { type ExhibitionProp } from 'src/navigation/types'

export const CreateTicketScreen = () => {
  const {
    params: { id },
  } = useRoute<ExhibitionProp>()

  return (
    <View>
      <Text>CreateTicketScreen for {id}</Text>
    </View>
  )
}
