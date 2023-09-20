import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

const Cast = ({ cast, navigation }) => {
    let personName = 'Keanu Reevs';
    let charactorName = 'Jhon Wick';

    return (
        <View className='my-6'>
            <Text className='text-white text-lg mx-4 mb-5 '>Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    cast && cast.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className='mr-4'
                                onPress={() => navigation.navigate("PersonScreen", person)}
                            >
                                <View className='overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-400'>
                                    <Image
                                        source={require('../assets/Images/castImage1.png')}
                                        className='rounded-2xl h-24 w-20'
                                    />
                                    </View>
                                    <Text className='text-white text-xs text-center mt-1'>
                                        {
                                            charactorName.length > 10 ? charactorName.slice(0, 10) + '...' : charactorName
                                        }
                                    </Text>
                                    <Text className='text-white text-xs text-center mt-1'>
                                        {
                                            charactorName.length > 10 ? charactorName.slice(0, 10) + '...' : charactorName
                                        }
                                    </Text>
                                
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Cast;