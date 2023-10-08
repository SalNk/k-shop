import { Text, ScrollView, View, Image } from 'react-native'
import DATA from '../data/DATA'


export default function Online() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                DATA.map((m, index) =>
                    <View
                        key={index}
                        className="flex items-center mt-3 hover:bg-gray-900 mr-2">
                        <Image
                            source={require("./../../assets/user.png")}
                            className="h-14 w-14"
                        />
                        <View className="">
                            <Text className="text-gray-400">{m.name}</Text>
                        </View>
                    </View>
                )
            }
        </ScrollView>
    )
}