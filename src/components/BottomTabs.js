import { View, Text, Image } from 'react-native'
import React from 'react'

import { ArchiveBoxIcon, Bars3Icon, ChatBubbleOvalLeftIcon, UserGroupIcon } from "react-native-heroicons/outline";

import { HomeIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native';



export default function BottomTabs() {
    return (
        <View className="rounded-t-xl w-full bg-gray-100 p-2  shadow-2xl flex-row justify-between">
            <TouchableOpacity className="hover:bg-gray-200 p-2 rounded-xl">
                <ArchiveBoxIcon color={'black'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity className="hover:bg-gray-200 p-2 rounded-xl">
                <UserGroupIcon color={'black'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity className="hover:bg-gray-200 p-2 rounded-xl">
                <HomeIcon color={'black'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity className="hover:bg-gray-200 p-2 rounded-xl">
                <ChatBubbleOvalLeftIcon color={'black'} size={30} />
            </TouchableOpacity>

            <TouchableOpacity className="hover:bg-gray-200 p-2 rounded-xl">
                <Bars3Icon color={'black'} size={30} />
            </TouchableOpacity>

        </View>
    )
}