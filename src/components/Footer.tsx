/* <-- dependencies --> */
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Pinterest from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Footer = () => {
    return (
        <View className='bg-[#EBEAE8]'>
            {/* logo */}
            <View className='justify-center items-center rounded-full w-[100px] h-[100px] bg-[#D9D9D9] relative bottom-[64px] ml-[25px]'>
                <Text className='text-black font-[400] text-[20px] uppercase'>
                    logo
                </Text>
            </View>

            <View className='flex flex-row justify-start bottom-4'>
                <Image className='w-[46px] h-[147px] ml-[26px]' source={require('@src/assets/images/contacts.png')} />

                <View className='flex flex-column'>
                    <Text className='text-[#676767] font-[500] text-[17px] ml-[26px] mt-[4px]'>
                        Lorem ipsum dolor sit amet,
                    </Text>
                    <Text className='text-[#676767] font-[500] text-[17px] ml-[26px]'>
                        consectetur adipiscing elit
                    </Text>
                    <Text className='text-[#676767] font-[500] text-[17px] ml-[26px] mt-[16px]'>
                        Lorem impsum
                    </Text>
                    <Text className='text-[#676767] font-[500] text-[17px] ml-[26px] mt-[26px]'>
                        Lorem impsum dolor sit amet
                    </Text>
                </View>
            </View>

            {/* social icons */}
            <View className='flex flex-row justify-start items-center bottom-[15px] ml-[54px] mt-[30px] mb-2'>
                <TouchableOpacity className='flex flex-row bg-[#747373] p-2 rounded-full'>
                    <Icons name='facebook' size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row bg-[#747373] p-2 rounded-full mx-4'>
                    <Pinterest name='pinterest' size={30} color='white' />
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row bg-[#747373] p-2 rounded-full'>
                    <Icons name='instagram' size={30} color='white' />
                </TouchableOpacity>
            </View>

            {/* footer */}
            <View className='flex-column mt-5 justify-start ml-[48px] h-[240px]'>

                <Text className='text-black font-[600] text-[20px] uppercase leading-[40px]'>
                    collection
                </Text>
                <Text className='text-black font-[600] text-[20px] uppercase leading-[40px]'>
                    information
                </Text>
                <Text className='text-black font-[600] text-[20px] uppercase leading-[40px]'>
                    more
                </Text>

            </View>

        </View>
    )
}

export default Footer

