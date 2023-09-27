import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

var { width, height } = Dimensions.get('window');

const SearchScreen = () => {
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const navigation = useNavigation();
    const [results, setResults] = useState([1,2,3,4]);
    return (
        <SafeAreaView className='bg-neutral-800 flex-1'>
            <View className='mx-4 mb-2 justify-between items-center border border-neutral-500 rounded-full mt-2 flex-row'>
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className='text-white pl-6 text-base font-semibold '
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                    className='bg-neutral-500 rounded-full p-3 m-1'
                >
                    <Feather name="x" size={25} color="white" />
                </TouchableOpacity>
            </View>

            {/* no result */}
            {
                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        className="space-y-3"
                    >
                        <Text className='text-white font-semibold ml-4'>Result ({results.length})</Text>
                        <View className='flex-row justify-between flex-wrap ml-2'>
                            {
                                results.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => navigation.navigate('MovieScreen', item)}
                                        >
                                            <View className='space-y-2 mb-4'>
                                                <Image
                                                    source={require('../assets/Images/moviePoster2.png')}
                                                    style={{ width: width * 0.44, height: height * 0.3 }}
                                                    className='rounded-3xl'
                                                />
                                                <Text className='text-neutral-400 ml-1 text-center'>
                                                    {
                                                        movieName.length > 22 ? movieName.slice(0, 22) + '...' : movieName
                                                    }
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <View className="flex-row justify-center">
                        <Image
                            source={require('../assets/Images/movieTime.png')}
                            className="h-96 w-96"
                        />
                    </View>
                )
            }


        </SafeAreaView >
    );
}

export default SearchScreen;