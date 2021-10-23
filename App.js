import * as React from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Components/Main.js'
import Users from './Components/Users.js'
import Details from "./Components/Details";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={MainNav}/>
                <Stack.Screen name="Users" component={Users} options={UsersNav}/>
                <Stack.Screen name="Details" component={Details} options={UsersNav}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const {height} = Dimensions.get('window')
const MainNav = {
    title: 'Register App',
    headerStyle: {
        backgroundColor: '#303F9F',
        height: '30vh',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 0.05 * height,
    }
}
const UsersNav = {
    title: 'Admin Page',
    headerStyle: {
        backgroundColor: '#303F9F',
        height: '10vh',
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 0.03 * height,
    }
}
