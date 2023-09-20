import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
} from "react-native";
import { styles } from "../../android/app/src/theme/Index";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get('window');

const MovieList = ({ title, data, hideSeeAll }) => {
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const navigation = useNavigation();
    return (
        <View className='mb-8 space-y-4 mt-4'>
            <View className='flex-row justify-between items-center mx-4'>
                <Text className='text-xl text-white'>{title}</Text>
                {
                    hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.text} className='text-lg'>See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>

            {/* movie row */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.push('MovieScreen', item)}
                            >
                                <View className='space-y-1 mr-4'>
                                    <Image
                                        source={require('../assets/Images/moviePoster2.png')}
                                        className='rounded-3xl'
                                        style={{ width: width * 0.33, height: height * 0.22 }}
                                    />
                                    <Text className='text-neutral-300 ml-1'>
                                        {
                                            movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName
                                        }
                                    </Text>
                                </View>

                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default MovieList;