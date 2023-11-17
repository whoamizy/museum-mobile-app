import { Text, View } from 'react-native'

import { useGetAllTickets } from 'src/api'

export const TicketsScreen = () => {
  const { data: tickets } = useGetAllTickets()

  return (
    <View>
      <Text>TicketsScreen</Text>
    </View>
  )
}
