import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import BottomTabs from '../../components/BottomTabs'

export default function Layout({ children }) {
    return (
        <View className="bg-white h-full">
            {children}

            <View className="absolute bottom-0 w-full shadow-lg shadow-red-900/50">
                <BottomTabs />
            </View>
        </View>
    )
}