import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import DATA from '../data/DataScrollOrder'
import React from 'react'

export default function Order() {
  return (
    <>
      <View className="flex-row justify-between">
        <Text>Commandes récentes</Text>
        <Text className="text-gray-500">Voir plus</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
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
      />


      {/* <ScrollView
        showsVerticalScrollIndicator
        vertical
       
      >
        <View className="flex-row">
          <Image
            source={require("./../../assets/user.png")}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
        <View className="flex-row">
          <Image
            source={require('./../../assets/user.png')}
            className="h-10 w-10"
          />
          <View className="ml-2">
            <Text className="font-bold">John Doe</Text>
            <Text className="text-xs text-gray-500">Eiusmod minim labore Aliqua...</Text>
          </View>

        </View>
      </ScrollView> */}
    </>
  )
}