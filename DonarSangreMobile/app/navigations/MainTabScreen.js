import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//vistas
import HomeScreen from '../screens/Inicio';
import DetailsScreen from '../screens/Donar';
import DonacionesScreen from '../screens/Donaciones';
import SolicitarScreen from '../screens/SolicitarDonacion'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const DonacionesStack = createStackNavigator();
const SolicitarStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFF"
        >
            <Tab.Screen
                name="Home"
                /**necesito crearlo abajo para poder tener el header */
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Donar"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Donar',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Donaciones"
                component={DonacionesStackScreen}
                options={{
                    tabBarLabel: 'Donaciones',
                    tabBarColor:'#009387',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Solicita"
                component={SolicitarStackScreen}
                options={{
                    tabBarLabel: 'Solicita',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

};


const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor='#009387'
                            onPress={() => { navigation.openDrawer() }}
                        />
                        
                        
                    )
                }}
            />
        </HomeStack.Navigator>
    );

};

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <DetailsStack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor='#009387'
                            onPress={() => { navigation.openDrawer() }}
                        />
                    )
                }}
            />
        </DetailsStack.Navigator>
    );

};

const DonacionesStackScreen = ({ navigation }) => {
    return (
        <DonacionesStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <DonacionesStack.Screen
                name="Details"
                component={DonacionesScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor='#009387'
                            onPress={() => { navigation.openDrawer() }}
                        />
                    )
                }}
            />
        </DonacionesStack.Navigator>
    );

};

const SolicitarStackScreen = ({ navigation }) => {
    return (
        <SolicitarStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#009387',
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <SolicitarStack.Screen
                name="Details"
                component={SolicitarScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor='#009387'
                            onPress={() => { navigation.openDrawer() }}
                        />
                    )
                }}
            />
        </SolicitarStack.Navigator>
    );

};
export default MainTabScreen;