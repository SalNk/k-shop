import { View, Text } from 'react-native'
import React from 'react'

export default function Separate() {
    return (
        <View className="flex flex-row justify-around items-center">
            <View className="h-[1] bg-gray-300 w-32"></View>
            <Text>Ou</Text>
            <View className="h-[1] bg-gray-300 w-32"></View>
        </View>
    )
}