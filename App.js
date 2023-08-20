import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      <SafeAreaView>
        <Text className="mt-48 text-center text-5xl font-bold">
          Let's build this App
        </Text>
      </SafeAreaView>
    </View>
  )
}