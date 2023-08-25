import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function SearchBar({ placeholder }) {
  return (
    <View className="bg-gray-100 w-full rounded-xl p-3">
      <TextInput placeholder={placeholder} />
    </View>
  )
}