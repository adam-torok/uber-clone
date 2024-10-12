import { icons, images } from "@/constants";
import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import InputField from "@/components/InputField";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/Oath";
import { useSignUp } from "@clerk/clerk-expo";

const SignIn = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋🏻
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter Your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />

          <InputField
            label="Password"
            placeholder="Enter Your Password"
            icon={icons.lock}
            value={form.password}
            secureTextEntry={true}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />

          <CustomButton
            title="Sign Up"
            className="mt-5"
            onPress={onSignInPress}
          />

          <OAuth />

          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-primary-500">Sign up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
