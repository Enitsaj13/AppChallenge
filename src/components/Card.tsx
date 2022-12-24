/* <-- dependencies --> */
import React from 'react'
import { Text, View, Image } from 'react-native'

/* <-- component --> */
import { Toolip } from '@src/components/Button'

const Card = () => {

  return (
    <View className='bg-white'>
      <Toolip text='15% OFF' />
      <View className='flex-column justify-between items-center'>
        <Image className='h-[210px] w-[160px] mt-5 rounded-[20px]' source={require('@src/assets/images/img2.png')} />
      </View>

      <View className='flex-column items-start mt-4 mb-2 ml-1'>
        <Text className='text-black font-[600] text-[15px] uppercase'>
          lorem ipsum
        </Text>
        <Text className='text-black font-[400] text-[13px]'>
          Lorem ipsum
        </Text>
      </ View>
    </View>
  )
}

export default Card

