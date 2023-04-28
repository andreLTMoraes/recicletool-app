import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecDrawer from '../components/Drawer'
import Feather from '@expo/vector-icons/Feather'
import { Image, Pressable } from 'react-native';

import Home from '../pages/home';
import Perfil from '../pages/perfil';
import MyRecycling from '../pages/my-recycling';
import OrderHistory from '../pages/orders-history';
import Rules from '../pages/rules';
import Help from '../pages/help';
import About from '../pages/about';
import Rescue from '../pages/rescue';
import RescueSuccess from '../pages/rescue-success';

import { COLORS } from '../utils/AppStyles'

const Drawer = createDrawerNavigator();

export default function InArea() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <RecDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                headerStyle: {backgroundColor: COLORS.background},
                headerShadowVisible: false,
                headerLeft: () => (
                        <Feather name={'menu'} onPress={() => navigation.openDrawer()} size={22}
                            style={{ paddingHorizontal: 20, color: COLORS.primaryDark }}/>
                ),
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate('home')}>
                        <Image
                            source={require("../assets/logo-g.png")}
                            style={{ width: 30, height: 30, marginRight: 20 }}
                        />
                    </Pressable>
                ),
                title: "RECICLETOOL",
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'OpenSans',
                    color: COLORS.primaryDark,
                    fontSize: 14,
                    lineHeight: 30,
                    fontWeight: '800',
                    letterSpacing: 1.5,
                    alignSelf: 'center',
                },
                drawerActiveTintColor: null,
                drawerActiveBackgroundColor: null,
                drawerLabelStyle: {
                    color: '#fff',
                    fontSize: 18,
                    marginLeft: -16
                }
            })}
        >
            <Drawer.Screen name='home' component={Home}
                options={{
                    drawerIcon: () => (<Feather name={'home'} size={18} color={'#fff'} />),
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen name='perfil' component={Perfil}
                options={({navigation}) => ({
                    drawerIcon: () => (<Feather name={'user'} size={18} color={'#fff'} />),
                    drawerLabel: 'Meus dados',
                    headerTitleStyle: {
                        fontFamily: 'OpenSans',
                        color: 'white',
                        fontSize: 14,
                        lineHeight: 30,
                        fontWeight: '800',
                        letterSpacing: 1.5,
                        alignSelf: 'center',
                    },
                    headerStyle: {backgroundColor: COLORS.primaryDark},
                    headerLeft: () => (
                        <Feather name={'menu'} onPress={() => navigation.openDrawer()} size={22}
                            style={{ paddingHorizontal: 20, color: COLORS.background }}/>
                    ),
                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('home')}>
                            <Image
                                source={require("../assets/logo-w.png")}
                                style={{ width: 30, height: 30, marginRight: 20 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <Drawer.Screen name='my-recycling' component={MyRecycling}
                options={{
                    drawerIcon: () => (<Feather name={'refresh-cw'} size={18} color={'#fff'} />),
                    drawerLabel: 'Minhas reciclagens'
                }}
            />
            <Drawer.Screen name='order-history' component={OrderHistory}
                options={{
                    drawerIcon: () => (<Feather name={'award'} size={18} color={'#fff'} />),
                    drawerLabel: 'Histórico de cupons'
                }}
            />
            <Drawer.Screen name='in-rules' component={Rules}
                options={{
                    drawerIcon: () => (<Feather name={'edit'} size={18} color={'#fff'} />),
                    drawerLabel: 'Regras'
                }}
            />
            <Drawer.Screen name='help' component={Help}
                options={{
                    drawerIcon: () => (<Feather name={'help-circle'} size={18} color={'#fff'} />),
                    drawerLabel: 'Ajuda'
                }}
            />
            <Drawer.Screen name='about' component={About}
                options={{
                    drawerIcon: () => (<Feather name={'alert-circle'} size={18} color={'#fff'} />),
                    drawerLabel: 'Sobre'
                }}
            />
            <Drawer.Screen name='rescue' component={Rescue}
                options={rescueScreenOptions}
            />
            <Drawer.Screen name='rescue-success' component={RescueSuccess}
                options={rescueScreenOptions}
            />
        </Drawer.Navigator>
    )
}

const rescueScreenOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: COLORS.primaryLight},
    drawerLabel: '',
    headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={{ padding: 30 }}>
            <Image
                source={require("../assets/back-arrow.png")}
                style={{ width: 16, height: 32 }}
            />
        </Pressable>
    ),
    headerRight: () => null,
    title: '',
})