import { View, Text, Touchable } from "react-native";
import React from "react";

export default function Button({ title }) {
  return (
    <View className="bg-blue-500 py-3 px-6 rounded-full w-80">
      <Text className="text-white font-bold text-lg text-center">{title}</Text>
    </View>
  );
}
