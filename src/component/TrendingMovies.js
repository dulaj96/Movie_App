import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');

const TrendingMovies = ({ data }) => {

    const navigation = useNavigation();

    const handleClick = (item) => {
        navigation.navigate('MovieScreen', item);
    }

    return (
        <View>
            <Text className='text-white text-xl mx-4 mb-5'>Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
                firstItem={1}
                // loop={true}
                // inactiveSlideScale={0.86}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{ display: 'flex', alignItems: 'center' }}
            />
        </View>
    )
}

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={require('../assets/Images/moviePoster1.png')}
                style={{
                    width: width * 0.6,
                    height: height * 0.4
                }}
                className='rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
}

export default TrendingMovies;