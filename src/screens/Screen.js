import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'

export default function Screen() {
  return (
    <View className="flex-1 h-screen justify-center items-center bg-blue-600">
      <Text className="font-bold text-3xl">Open he fnie up App.js to start working on your app!</Text>
      <Text>lore</Text>
      <Screen />
      <StatusBar style="auto" />
    </View>
  )
}