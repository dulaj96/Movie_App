import React, { useState } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { styles, theme } from '../assets/theme/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../component/MovieList';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : ' my-3';

const PersonScreen = () => {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [personMovies, setPersonMovies] = useState([1,2,3,4])

    return (
        <ScrollView
            className='flex: 1 bg-neutral-900'
            contentContainerStyle={{ paddingBottom: 20 }}
        >
            {/* back button */}
            <SafeAreaView className={"z-20 w-full flex-row justify-between items-center px-4 " + verticalMargin}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className='p-1 rounded-xl'
                    style={styles.background}
                >
                    <Icon name="chevron-back" size={25} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <Icon name="heart" size={25} color={isFavourite ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}
            <View>
                <View
                    className="flex-row justify-center"
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 1,
                    }}
                >
                    <View className="items-center rounded-full overflow-hidden border border-neutral-500 h-72 w-72">
                        <Image
                            source={require("../assets/Images/castImage2.png")}
                            style={{ height: height * 0.43, width: width * 0.74 }}
                        />
                    </View>
                </View>

                <View className='mt-6'>
                    <Text className='text-3xl text-white font-bold text-center'>
                        Keanu Reeves
                    </Text>
                    <Text className='text-base text-neutral-500 text-center'>
                        London, United Kindom
                    </Text>
                </View>

                <View className='bg-neutral-700 flex-row mx-3 mt-6 justify-between items-center rounded-full p-4'>
                    <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
                        <Text className='text-white font-semibold'>Gender</Text>
                        <Text className='text-neutral-300 text-sm'>Male</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
                        <Text className='text-white font-semibold'>Birthday</Text>
                        <Text className='text-neutral-300 text-sm'>1964-05-20</Text>
                    </View>
                    <View className='border-r-2 border-r-neutral-400 px-4 items-center'>
                        <Text className='text-white font-semibold'>Known for</Text>
                        <Text className='text-neutral-300 text-sm'>Acting</Text>
                    </View>
                    <View className='px-4 items-center'>
                        <Text className='text-white font-semibold'>Popularty</Text>
                        <Text className='text-neutral-300 text-sm'>64.23</Text>
                    </View>
                </View>

                <View className='mt-6 mx-4 space-y-2'>
                    <Text className='text-white text-lg'>Biography</Text>
                    <Text className='text-neutral-400 tracking-wide'>
                        BiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiographyBiography
                    </Text>
                </View>

                {/* movies */}
                <MovieList data={personMovies} title={'Movies'}/>
            </View>
        </ScrollView>
    )
}

export default PersonScreen;