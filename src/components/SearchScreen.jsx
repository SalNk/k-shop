import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from '@rneui/themed'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Image } from 'react-native'
import DATA from '../data/DATA'

// import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function SearchScreen() {
    const [search, setSearch] = useState('')
    const [datas, setDatas] = useState([])
    const UpdateSearch = (value) => {
        setSearch(value)
        if (search.length > 0) {
            // let newDatas = DATA.filter(data => data.name.includes(search)) 
            let newDatas = DATA.filter(data => data.name.toUpperCase().indexOf(search.toUpperCase()) !== -1)
            setDatas(newDatas)
        }
    }
    return (
        // <SafeAreaProvider>
        //     {/* <Text>SearchScreen</Text> */}
        // </SafeAreaProvider>

        <View>
            <SafeAreaView>
                <SearchBar
                    placeholder='Rechercher'
                    lightTheme={true}
                    value={search}
                    onChangeText={UpdateSearch}
                />

                <FlatList
                    data={datas}
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
                />
            </SafeAreaView>
        </View>
    )
}