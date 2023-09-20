import React, { useState } from 'react';
import {View, Text, ScrollView, Dimensions, SafeAreaView, TouchableOpacity} from "react-native";
import { styles, theme } from '../assets/theme/Index';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : ' my-3';

const PersonScreen = () => {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);

    return(
        <ScrollView 
        className='flex: 1 bg-neutral-900'
        contentContainerStyle={{paddingBottom: 20}}
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
                
        </ScrollView>
    )
}

export default PersonScreen;