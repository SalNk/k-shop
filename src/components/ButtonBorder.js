import { View, Text, Image } from 'react-native'
import React from 'react'

export default function ButtonBorder({ title, icon }) {
    return (
        <View className="border border-gray-300 py-3 px-6 rounded-full w-80 flex flex-row justify-center items-center">
            <Image source={icon} className="w-5 h-5 mr-2" />
            <Text className="text-md text-gray-600 font-bold text-center">{title}</Text>
        </View>
    )
}