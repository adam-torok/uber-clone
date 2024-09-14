import { icons, images } from "@/constants";
import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView className="item-center justify-between bg-white">
        <TouchableOpacity
          className="w-full flex justify-end items-start p-5"
          onPress={() => {
            router.replace("/(auth)/welcome");
          }}
        >
          <Text className="text-black text-md font-JakartaBold">Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image src={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter Your Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />

          <InputField
            label="Email"
            placeholder="Enter Your Email"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />

          <InputField
            label="Name"
            placeholder="Enter Your Name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
