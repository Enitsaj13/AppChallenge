import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native'

const Header = () => {

    const [isPressed, setIsPressed] = useState(false)

    const handlePress = () => setIsPressed(!isPressed)

    const [count, setCount] = useState(0)

    const handlePressCount = () => setCount(count + 1)

    return (
        <View className='flex-row justify-between items-center mt-[15px] mb-[25px] bg-white h-[53px] z-10 px-[25px]'>
            <TouchableOpacity className='flex-column' onPress={handlePress}>
                {[1, 2, 3].map((index) => {
                    return (
                        <View
                            key={index} className={`bg-[#D9D9D9] w-[36px] h-[7.76px] rounded-[20px] my-[1.8px] ${isPressed ? 'rotate-[320deg]' : ''}`}
                        />)
                })}
            </TouchableOpacity>

            <TouchableOpacity className='bg-[#D9D9D9] w-[45px] h-[45px] rounded-full justify-center left-6'>
                <Text className='text-center text-black font-[400] text-[8px] mt-[2px] uppercase bottom-[1px]'>
                    logo
                </Text>
            </TouchableOpacity>

            <View className='flex-row justify-evenly items-center'>

                <TouchableOpacity onPress={handlePressCount}>
                    <View className='bg-[#D9D9D9] w-[15px] h-[15px] rounded-full justify-center absolute left-[30px] top-[15px] z-10'>
                        <Text className='text-center text-black font-[400] text-[8px] uppercase'>
                            {count}
                        </Text>
                    </View>
                    <View className='flex-column justify-evenly items-center mx-4'>
                        <Image className='w-[15px] h-[8px] top-[2px]' source={require('@src/assets/images/jar-head.png')} />
                        <Image className='w-[21px] h-[19px]' source={require('@src/assets/images/jar-body.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image className='w-[28px] h-[28px]' source={require('@src/assets/images/star.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header


