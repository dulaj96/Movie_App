import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    StatusBar, Dimensions,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles, theme } from '../assets/theme/Index';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../component/Cast';
import MovieList from '../component/MovieList';

const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : ' mt-3';
var { width, height } = Dimensions.get('window');

const MovieScreen = () => {
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const [cast, setCast] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    const navigation = useNavigation();
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    useEffect(() => {
        //call the movie details api
    }, [item])

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            className='flex-1 bg-neutral-900'
        >
            <StatusBar backgroundColor='black' barStyle="light-content" />
            {/* back button and movie poster */}
            <View>
                <SafeAreaView className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className='p-1 rounded-xl'
                        style={styles.background}
                    >
                        <Icon name="chevron-back" size={25} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <Icon name="heart" size={25} color={isFavourite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>

                <View>
                    <Image
                        source={require('../assets/Images/moviePoster2.png')}
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>
            </View>

            {/* movie details */}
            <View className='space-y-3' style={{ marginTop: -(height * 0.09) }}>
                {/* title */}
                <Text className='text-white text-center text-3xl font-bold tracking-wider'>
                    {movieName}
                </Text>

                {/* status, release, runtime */}
                <Text className='text-neutral-400 text-center font-semibold text-base'>
                    Released - 2020 - 170 min
                </Text>

                {/* genres */}
                <View className='flex-row justify-center mx-4 space-x-2'>
                    <Text className='text-neutral-400 text-center font-semibold text-base'>
                        Action -
                    </Text>
                    <Text className='text-neutral-400 text-center font-semibold text-base'>
                        Thrill -
                    </Text>
                    <Text className='text-neutral-400 text-center font-semibold text-base'>
                        Comedy
                    </Text>
                </View>

                {/* description */}
                <Text className='text-neutral-400 mx-4 tracking-wide'>
                    Ant-Man and the Wasp find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that pushes them beyond the limits of what they thought was possible.
                </Text>
            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* similar movies */}
            <MovieList title='Similar Movies' hideSeeAll={true} data={similarMovies} />

        </ScrollView>
    )
}

export default MovieScreen;