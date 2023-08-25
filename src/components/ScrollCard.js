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
                <View className="h-48 w-72 bg-blue-400 rounded-xl p-4">
                    <Text className="text-white text-xl">Caisse</Text>
                    <Text className="text-white text-4xl font-bold">125k $</Text>
                    <Text className="text-white">Labore cupidatat magna officia est labore consequat laboris consectetur Lorem.</Text>
                </View>
                <View className="h-48 w-72 bg-red-500 rounded-xl p-4">
                    <Text className="text-white text-xl">Dettes</Text>
                    <Text className="text-white text-4xl font-bold">12k $</Text>
                    <Text className="text-white">Occaecat labore et qui sint eiusmod sint.</Text>
                </View>
                <View className="h-48 w-72 bg-yellow-300 rounded-xl p-4">
                    <Text className="text-white text-xl">Commandes</Text>
                    <Text className="text-white text-4xl font-bold">125k $</Text>
                    <Text className="text-white">Sint aliqua et ut do proident culpa occaecat officia in nulla consectetur.</Text>
                </View>
            </ScrollView>
        </View>
    )
}