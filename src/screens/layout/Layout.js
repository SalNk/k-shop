import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function Layout({ children }) {
    return (
        <View className="bg-white h-full">
            {children}
        </View>
    )
}