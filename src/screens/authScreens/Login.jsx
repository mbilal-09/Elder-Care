import {View, Text, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../../components/PasswordInput';
import CustomInput from '../../components/EmailInput';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView className="h-full">
      <ScrollView className="h-full bg-white flex-1">
      <View className="p-10 h-full flex justify-center items-center">
        <Image
        className="w-72 h-72"
          source={{ uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1709904475~exp=1709905075~hmac=d51c3263ac5331cd2dc6d50da9e0c949c82aa4048e625eec8653cd65401c3de8' }
          }
        />
        <View className="">
          <Text className="text-black text-2xl">Log In</Text>
        </View>
        <CustomInput
          label={'Email'}
          value={email}
          onChangeText={setEmail}
          placeholder={'Enter your email'}
        />
        <PasswordInput
          placeholder={'Enter your password'}
          label={'Password'}
          value={password}
          onChangeText={setPassword}
        />
        <Text className="text-orange-300 text-right w-full">
          forgot password?
        </Text>
        <View className="w-full mt-6">
          <TouchableOpacity className="bg-orange-500 text-center p-3 rounded-lg">
            <Text className="text-white text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
