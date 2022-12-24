/* <-- dependencies --> */
import React from 'react'
import { Text, View, TouchableHighlight, TouchableOpacity } from 'react-native'

/* <-- types --> */
interface ButtonProps {
  title: string
}

interface ToolipProps {
  text: string
}

const Button = ({ title }: ButtonProps) => {

  return (
    <View className='justify-center items-center'>
      <TouchableOpacity className='bg-[#EBEAE8] rounded-full w-[127px] h-[26px] absolute bottom-6' style={{ elevation: 20 }}>
        <Text className='text-center text-black font-bold text-[15px] mt-[2px]'>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const Toolip = ({ text }: ToolipProps) => {

  return (
    <View className='absolute -right-4 z-10 top-8'>
      <TouchableHighlight className='bg-[#E0CA9E] w-[48px] h-[23px]'>
        <Text className='text-center text-white font-[500] text-[10px] mt-[4.5px]'>
          {text}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export { Button, Toolip }


