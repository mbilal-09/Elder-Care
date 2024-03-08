import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PasswordInput = ({label, placeholder, value, onChangeText}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="flex flex-col w-full">
      <Text
        className="text-black text-[16px] font-normal "
        style={{fontSize: hp('1.9%')}}>
        {label}
      </Text>
      <View className="bg-[#fafafa] flex flex-row items-center rounded-[10px] py-1 my-2">
        <TextInput
          className="flex-1 px-4 text-black"
          placeholderTextColor="#ccc"
          style={{fontSize: hp('1.9%'), height: hp('6%')}}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} className="p-3">
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color="#777"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
