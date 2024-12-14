import { onBoarding } from '@/constants';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const OnBoarding = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="flex w-full items-end p-5"
        onPress={() => router.replace('/(auth)/sign-up')}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full " />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoarding.map((item) => (
          <View key={item.id}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default OnBoarding;
