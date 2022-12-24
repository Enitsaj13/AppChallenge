/* <-- dependencies --> */
import React from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'

const Home = () => {

  return (
    <View>
      <ImageBackground className='w-full -my-24 h-[812px]'
        source={require('@src/assets/images/bg.png')}
        resizeMode='stretch'
      />

      <Image className='mt-6 w-[267px] h-[197px] absolute right-0' source={require('@src/assets/images/img4.png')} />

      <Image className='mt-[202px] ml-5 w-[220px] h-[294px] absolute'
        source={require('@src/assets/images/img3.png')} />

      <View className='absolute top-0 left-0 w-full h-full flex-col justify-center items-center'>
        <TouchableOpacity className='bg-white rounded-full w-[179.75px] h-[47px] relative left-[7px] top-[10px]' style={{ elevation: 20 }}>
          <Text className='text-center text-black font-[500] text-[20px] mt-2'>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <Image className='mr-[16px] w-[197px] h-[263px] absolute right-0 -bottom-[46px]'
        source={require('@src/assets/images/img1.png')} />
    </View>
  )
}

export default Home

