import { View, Text, Image } from 'react-native'
import React from 'react'

import { ArchiveBoxIcon, Bars3Icon, ChatBubbleOvalLeftIcon, UserGroupIcon } from "react-native-heroicons/outline";

import { HomeIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native';



export default function BottomTabs({ navigation }) {
    return (
        <View className="rounded-t-xl w-full bg-gray-100 p-2  -shadow-2xl flex-row justify-between shadow-black ">
            <TouchableOpacity
                className="hover:bg-gray-200 p-2 rounded-xl"
                onPress={() => navigation.navigate('order')}
            >
                <ArchiveBoxIcon color={'#5F5F5F'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                className="hover:bg-gray-200 p-2 rounded-xl"
            // onPress={() => navigation.navigate('client')}
            >
                <UserGroupIcon color={'#5F5F5F'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                className="hover:bg-gray-200 p-2 rounded-xl"
            // onPress={() => navigation.navigate('home')}
            >
                <HomeIcon color={'#2F2F2F'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                className="hover:bg-gray-200 p-2 rounded-xl"
            // onPress={() => navigation.navigate('')}
            >
                <ChatBubbleOvalLeftIcon color={'#5F5F5F'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity
                className="hover:bg-gray-200 p-2 rounded-xl"
            // onPress={() => navigation.navigate('')}
            >
                <Bars3Icon color={'#5F5F5F'} size={30} />
            </TouchableOpacity>

        </View>
    )
}