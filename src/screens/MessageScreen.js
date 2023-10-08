import { FlatList, View, Text, Image } from 'react-native'
import React from 'react'
import Layout from './layout/Layout'
import DATA from '../data/DATA'
import HeaderMessage from '../components/HeaderMessage'
import SearchScreen from '../components/SearchScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native'


export default function MessageScreen({ navigation }) {
    return (
        <Layout>
            <View className="m-4 pt-4 h-full">
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <View className="flex-row items-center hover:bg-gray-900 mb-2">
                            <Image
                                source={require("./../../assets/user.png")}
                                className="h-14 w-14"
                            />
                            <View className="ml-2 w-72">
                                <View className="flex-row justify-between">
                                    <Text className="font-bold">{item.name}</Text>
                                    <Text className="text-gray-400"> {item.last_time} </Text>
                                </View>
                                <Text className="text-xs">{item.description}</Text>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<View className="fixed top-0 left-0 right-0">
                        <HeaderMessage navigation={onPress = () => navigation.navigate('search')} />
                    </View>}
                />
            </View>


        </Layout>

        // <SafeAreaProvider>
        //     <View>

        //         <SearchScreen />
        //     </View>

        // </SafeAreaProvider>


    )
}