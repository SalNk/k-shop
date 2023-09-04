import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Layout from './layout/Layout'
import DATA from '../data/DATA'
import Header from '../components/Header'
import { StatusBar } from 'expo-status-bar'

export default function HomeScreen() {
  return (
    <>
      <Layout>
        <StatusBar style='black' />
        <View className="m-4 pt-4 h-full">
          <FlatList
            data={DATA}
            renderItem={({ item }) =>
              <View className="flex-row mt-3 hover:bg-gray-900">
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

        </View>

      </Layout >
    </>
  )
}