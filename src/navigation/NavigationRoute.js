import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const NavigationRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen" >
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
                {/* <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignUp} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationRoute;