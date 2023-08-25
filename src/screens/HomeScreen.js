import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Layout from './layout/Layout'
import { StatusBar } from 'native-base'
import SearchBar from '../components/SearchBar'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScrollCard from '../components/ScrollCard'
import ScrollOrder from '../components/ScrollOrder'

export default function HomeScreen() {
  return (
    <>
      <Layout>
        <View className="m-4">
          <SafeAreaView>
            <View className="flex-row justify-between items-center">
              <Image
                source={require('./../../assets/user.jpg')}
                className="rounded-full w-12 h-12"
              />
              <Image
                source={require('./../../assets/notification.png')}
                className="rounded-full w-8 h-8"
              />
            </View>
            <Text className="text-xl">Salut, Salem</Text>
            <Text>
              Prenez le contrôle de vos activités
            </Text>
            <View className="my-4">
              <SearchBar placeholder={'Rechercher'} />
            </View>
          </SafeAreaView>

          <View>
            <ScrollCard />
          </View>

          <View className="my-4">
            <ScrollOrder />
          </View>

        </View>
      </Layout >
    </>
  )
}