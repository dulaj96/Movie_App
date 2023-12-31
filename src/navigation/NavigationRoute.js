import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MoviewScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" >
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
                <Stack.Screen options={{headerShown:false}} name="MovieScreen" component={MovieScreen} />
                <Stack.Screen options={{headerShown:false}} name="PersonScreen" component={PersonScreen} />
                <Stack.Screen options={{headerShown:false}} name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoute;