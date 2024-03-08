import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomInput({label, placeholder, value, onChangeText}) {
  const [email, setEmail] = useState('');

  return (
    <View className="flex flex-col w-full">
        <Text
        className="text-black text-[16px] font-normal "
        style={{fontSize: hp('1.9%')}}>
        {label}
      </Text>
      <View className="flex flex-col mb-2">
        <TextInput
          className="bg-[#fafafa] px-4 rounded-[10px] flex items-center justify-center py-2 my-1"
          style={{fontSize: hp('1.9%'), height: hp('7%')}}
          Editable
          placeholderTextColor="#ccc"
          keyboardType={'email-address'}
          autoCapitalize="none"
          placeholder={placeholder}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
      </View>
    </View>
  );
}
