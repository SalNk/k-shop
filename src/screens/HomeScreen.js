import { View, Text, Image, FlatList, StatusBar } from 'react-native'
import React from 'react'
import Layout from './layout/Layout'
import BottomTabs from '../components/BottomTabs'
import DATA from '../data/DATA'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <>
      <Layout>
        <StatusBar />
        <View className="m-4 pt-1 h-full">
          <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <View className="flex-row mt-3">
                <Image
                  source={require("./../../assets/user.png")}
                  className="h-10 w-10"
                />
                <View className="ml-2">
                  <Text className="font-bold">{item.name}</Text>
                  <Text className="text-xs text-gray-500">{item.description}</Text>
                </View>
              </View>
            }
            keyExtractor={item => item.id}
            ListHeaderComponent={<Header />}
            showsVerticalScrollIndicator={false}
          />

          {/* <View className="absolute bottom-16 w-full shadow-2xl">
            <BottomTabs />
          </View> */}

        </View>

      </Layout >
    </>
  )
}