import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function ScrollCard() {
    return (
        <View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
            >
                <View className="h-48 w-72 bg-blue-400 rounded-xl">
                    <Text>Caisse</Text>
                    <Text>125k $</Text>
                </View>
                <View className="h-48 w-72 bg-red-500 rounded-xl">
                    <Text>Caisse</Text>
                    <Text>125k $</Text>
                </View>
                <View className="h-48 w-72 bg-yellow-300 rounded-xl">
                    <Text>Caisse</Text>
                    <Text>125k $</Text>
                </View>
            </ScrollView>
        </View>
    )
}