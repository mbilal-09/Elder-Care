import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordInput from '../../components/PasswordInput';
import CustomInput from '../../components/EmailInput';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView className="h-full">
      <ScrollView className="h-full bg-white flex-1">
        <TouchableOpacity
          activeOpacity={0.5}
          className={'bg-transparent absolute left-2 top-2 z-10 rounded-full'}
          onPress={() => {
            let canGoBack = navigation.canGoBack();
            if (canGoBack) {
              navigation.goBack();
            } else {
              console.log('no one can go back so stfu!');
            }
          }}>
          <Icon
            name={'chevron-back-outline'}
            size={24}
            color={`${'#0c1a30'}`}
          />
        </TouchableOpacity>
        <View className="px-4 py-4 h-full flex justify-center items-center">
          <Image
            className="w-56 h-56 mx-auto"
            source={require('../../assets/images/signup.png')}
          />
          <View className="">
            <Text
              className="text-[#0c1a30] text-center font-bold mb-2"
              style={{fontSize: hp('2.4%')}}>
              Create Account
            </Text>
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
          <Pressable
            className={'text-start flex flex-row items-start justify-start'}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text className="text-orange-300 text-right w-full">
              forgot password?
            </Text>
          </Pressable>
          <View className="w-full mt-6">
            <TouchableOpacity className="bg-orange-500 text-center p-3 rounded-lg">
              <Text className="text-white text-center">Signup</Text>
            </TouchableOpacity>
            <View className="flex flex-row items-center justify-normal space-x-1 mt-2">
              <Text className=" text-neutral-500 ">Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text className=" text-orange-400">Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
