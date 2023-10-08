import { View, Text } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function SearchScreen() {
    return (
        <SafeAreaProvider>
            {/* <Text>SearchScreen</Text> */}
            <SearchBar />
        </SafeAreaProvider>
    )
}