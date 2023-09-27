import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
    return (
        <View className=' justify-center items-center'>
            <ActivityIndicator size="40" />
        </View>
    )
}

export default Loading;