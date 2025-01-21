import icons from '@/constants/icons';
import { View, Text, Image } from 'react-native'
import { Models } from 'react-native-appwrite';

interface Props {
    item: Models.Document;
}

const Comment = ({item}: Props) => {
  return (
    <View className='flex flex-col items-start'>
        <View className='flex flex-row items-center'>
            <Image source={{uri: item.avatar}} className='size-14 rounded-full' />
            <Text className='text-base text-black-300 text-start font-rubik-bold ml-3'>
                {item.name}
            </Text>
        </View>
        <Text className='text-base text-black-200 font-rubik mt-2'>
            {item.review}
        </Text>
        <View className='flex flex-row items-center w-full justify-between mt-4'>
            <View className='flex flex-row items-center'>
                <Image source={icons.heart} className='size-6' tintColor={"#0061FF"} />
                <Text className='text-sm text-black-300 font-rubik-medium ml-2'>120</Text>
            </View>
            <Text className='text-sm text-black-300 font-rubik'>
                {new Date(item.$createdAt).toDateString()}
            </Text>
        </View>
    </View>
  )
}

export default Comment