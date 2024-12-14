import { router } from 'expo-router';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const OnBoarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="flex w-full items-end p-5"
        onPress={() => router.replace('/(auth)/sign-up')}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;
