import { View, Text, Image, StatusBar, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import Layout from './layout/Layout'

export default function WelcomeScreen({ navigation }) {
    return (
        <Layout>
            <View className="flex h-full items-center mx-12">
                <StatusBar style="black" />

                <Image
                    source={require('./../../assets/adaptive-icon.png')}
                    className="w-24 h-24 mt-12"
                />
                <Image
                    source={require('./../../assets/all-in-one.jpg')}
                    className="h-[350] w-[350]"
                />
                <Text className="text-xl text-center font-semibold tracking-wide text-slate-700">
                    L'Appli tout en un qui vous permet de gérer le flux et le trafic de votre business
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('login')}
                    className="absolute bottom-20">
                    <Button title='Commencer' />
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    screen: {

    }
})