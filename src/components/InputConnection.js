import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Input({ placeholder }) {
  return (
      <View className="bg-gray-200 py-3 px-3 rounded-full w-80">
          <TextInput
              placeholder={placeholder}
          />
      </View>
  )
}