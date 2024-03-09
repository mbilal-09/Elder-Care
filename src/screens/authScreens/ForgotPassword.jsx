import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/EmailInput';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  return (
    <View className="px-4 h-full w-full bg-white flex-1 flex-col justify-center">
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}} className="px-1">
       
          <View className="mt-10 space-y-2">
            <Image
              className="w-56 h-56 mx-auto"
              source={require('../../assets/images/resetPassword.png')}
            />
            <View className={'mb-8'}>
              <Text
                className="text-[#0c1a30] text-center font-bold mb-2"
                style={{fontSize: hp('2.4%')}}>
                Reset Password
              </Text>
            </View>
            <CustomInput
              label={'Email / Phone'}
              placeholder={'example@gmail.com'}
              value={email}
              onChangeText={setEmail}
            />
            <View className="w-full">
              <TouchableOpacity className="bg-orange-500 text-center p-4 rounded-lg">
                <Text className="text-white text-center text-md">Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
