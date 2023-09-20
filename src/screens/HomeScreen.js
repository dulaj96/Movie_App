import React, {useState} from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from "../../android/app/src/theme/Index";
import TrendingMovies from "../component/TrendingMovies";
import MovieList from "../component/MovieList";

const ios = Platform.OS === 'ios';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1,2,3])
  const [upcoming, setUpcoming] = useState([1,2,3])
  const [topRated, setTopRated] = useState([1,2,3])

  return (
    <View className='flex: 1 bg-neutral-700'>
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar barStyle='light' />
        <View className='flex-row justify-between items-center mx-4 mt-2'>
          <FontAwesome name="bars" size={25} color="white" />
          <Text className='text-white text-3xl font-bold'>
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <FontAwesome name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* trending movie carousel */}
        <TrendingMovies data={trending} />

        {/* upcoming movie row */}
        <MovieList title='Upcoming' data={upcoming}/>

        {/* topRated movie row */}
        <MovieList title='topRated' data={topRated}/>

      </ScrollView>
    </View>
  )
}

export default HomeScreen;