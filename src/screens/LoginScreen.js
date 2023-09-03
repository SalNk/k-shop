import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonBorder from '../components/ButtonBorder'
import Button from '../components/Button'
import Layout from './layout/Layout'
import Separate from '../components/Separate'
import { useState } from "react";

export default function LoginScreen({ navigation }) {
    const [showModal, setShowModal] = useState(false);

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
                        onPress={() => navigation.navigate('home')}
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

            {/* <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>
                        <Text>Contact Us</Text>
                    </Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>
                                <Text>Name</Text>
                            </FormControl.Label>
                            <InputConnection />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>
                                <Text>Email</Text>
                            </FormControl.Label>
                            <InputConnection />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                setShowModal(false);
                            }}>
                                Cancel
                            </Button>
                            <Button onPress={() => {
                                setShowModal(false);
                            }}>
                                <Text>Save</Text>
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal> */}
        </Layout >
    )
}