import InputField from "@/Components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create your account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            icon={icons.lock}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
