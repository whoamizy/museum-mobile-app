import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const HomeScreen = () => {
  return (
    <SafeAreaView edges={['top']}>
      <View>
        <Text>
          HomeScreen
        </Text>
      </View>
    </SafeAreaView>
  )
}
