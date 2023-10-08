import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import FullSeparate from './FullSeparate'
import Online from './Online'
import NewMessage from './NewMessage'

export default function HeaderMessage({ navigation }) {
    return (
        <View class>
            <View className="flex-row ms-center justify-between">
                <Text className="text-3xl font-bold">Messages</Text>
                <TouchableOpacity className="bg-slate-200 p-2 rounded-full">
                    <MagnifyingGlassIcon color={'black'} onPress={navigation} />
                </TouchableOpacity>
            </View>

            <View className="flex-row my-3">
                <TouchableOpacity>
                    <Text className="text-lg mr-3 bg-blue-400 rounded-full text-white py-1 px-3">Clients</Text>
                </TouchableOpacity>
                <Text className="text-lg text-gray-500">Non enregistré</Text>
            </View>

            <View>
                <Online />
            </View>

            <View className="py-3">
                <FullSeparate />
            </View>

            {/* <View className="absolute bottom-0 left-0">
                <NewMessage />
            </View> */}
        </View >
    )
}