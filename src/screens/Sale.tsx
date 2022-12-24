/* <-- dependencies --> */
import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'

/* <-- component --> */
import { Button } from '@src/components/Button';
import Card from '@src/components/Card';


const Sale = () => {

  return (
    <View className='bg-[#EBEAE8] my-32'>

      <View className='flex-column justify-between items-center mb-[10px]'>
        <Image className='h-[300px] w-[204.71px] mt-5 rounded-[20px]' source={require('@src/assets/images/img2.png')} />
        <Button title='Sweatshirts' />
      </View>

      <View className='flex-column justify-between items-center mb-[10px]'>
        <Image className='h-[300px] w-[204.71px] mt-5 rounded-[20px]' source={require('@src/assets/images/img2.png')} />
        <Button title='Hoodies' />
      </View>

      <View className='flex-column justify-between items-center mb-[70px]'>
        <Image className='h-[300px] w-[204.71px] mt-5 rounded-[20px]' source={require('@src/assets/images/img2.png')} />
        <Button title='Pair' />
      </View>

      <View className='bg-white'>
        <View className='bg-white h-[46px] w-full mb-10' style={{ elevation: 5 }}>
          <Text className='text-center text-[#CF4242] font-[600] text-[35px] uppercase'>
            Sale
          </Text>
        </View>
        <FlatList
          numColumns={2}
          data={[1, 2, ...Array(4).keys()]}
          renderItem={() => <Card />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.toString()}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        />

        <TouchableOpacity className='bg-white h-[32px] w-[124px] rounded-full justify-center self-center items-center mt-5 mb-20' style={{ elevation: 10 }}>
          <Text className='text-black font-[500] text-[18px]'>More</Text>
        </TouchableOpacity>
      </View>

    </View >
  )
}

export default Sale

