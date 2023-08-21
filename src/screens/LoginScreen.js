import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonBorder from '../components/ButtonBorder'
import Button from '../components/Button'
import Layout from './layout/Layout'
import Separate from '../components/Separate'
import { Actionsheet, useDisclose, Box, Center, NativeBaseProvider } from "native-base";

export default function LoginScreen() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <Layout>
            <View className="h-full flex items-center justify-center mx-16 -mt-8">
                <Image
                    source={require('./../../assets/login.jpg')}
                    className="w-96 h-96"
                />
                <Text className="text-md text-center -mt-8">Connectez-vous pour profiter de toutes les fonctionnalités.</Text>
                <View className="mt-8">
                    <TouchableOpacity
                        onPress={onOpen}
                    >
                        <Button title="Se connecter" />
                    </TouchableOpacity>
                    <View>
                        <View className="mt-4">
                            <Separate />
                        </View>

                    </View>
                    <TouchableOpacity className="my-4">
                        <ButtonBorder icon={require('./../../assets/search.png')} title="Continuer avec Google" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonBorder icon={require('./../../assets/facebook.png')} title="Continuer avec Facebook" />
                    </TouchableOpacity>
                    <Text className="text-center mt-4">Vous n'avez pas de compte ? <Text className="text-blue-500">Créez un compte</Text> </Text>
                </View>
            </View>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Input placeholder="placeholder" />
                    </Box>
                </Actionsheet.Content>
            </Actionsheet>
        </Layout>
    )
}