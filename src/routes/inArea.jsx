import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecDrawer from '../components/Drawer'
import Feather from '@expo/vector-icons/Feather'
import { Image, Pressable, View } from 'react-native';

import Home from '../pages/home';
import Perfil from '../pages/perfil';
import MyRecycling from '../pages/my-recycling';
import OrderHistory from '../pages/orders-history';
import Rules from '../pages/rules';
import Help from '../pages/help';
import About from '../pages/about';
import Rescue from '../pages/rescue';
import RescueSuccess from '../pages/rescue-success';
import DeleteAccount from '../pages/delete-account';

import { COLORS } from '../utils/AppStyles'

const Drawer = createDrawerNavigator();

const HomeIcon = ({onPress}) => (
    <View style={{ marginRight: 15, borderRadius: 50, overflow: 'hidden' }}>
        <Pressable
            onPress={onPress}
            style={{ padding: 5 }}
            android_ripple={{ color: '#D3D3D3' }}
        >
            <Image
                source={require("../assets/logo-g.png")}
                style={{ width: 28, height: 28 }}
            />
        </Pressable>
    </View>
)

const HamburgerIcon = ({onPress, color, rippleColor}) => (
    <View style={{ marginLeft: 20, borderRadius: 50, overflow: 'hidden' }}>
        <Pressable
            onPress={onPress}
            style={{ padding: 10 }}
            android_ripple={{ color: rippleColor }}
        >
            <Feather name={'menu'} size={22}
            style={{ color: color }} />
        </Pressable>
    </View>
);

const BackIcon = ({onPress, rippleColor, color}) => (
    <View style={{ marginLeft: 20, borderRadius: 50, overflow: 'hidden' }}>
        <Pressable
            onPress={onPress}
            style={{ padding: 5 }}
            android_ripple={{ color: rippleColor }}
        >
            <Feather name={'chevron-left'} color={color} size={27} />
        </Pressable>
    </View>
);

export default function InArea() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <RecDrawer {...props} />}
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: COLORS.background },
                headerShadowVisible: false,
                headerLeft: () => (
                    <HamburgerIcon 
                        onPress={() => navigation.openDrawer()} 
                        color={COLORS.primaryDark} 
                        rippleColor='#D3D3D3'
                    />
                ),
                headerRight: () => (
                    <HomeIcon onPress={() => navigation.navigate('home')}/>
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
                options={({ navigation }) => {
                    let props = {
                        navigation: navigation,
                        drawerIconName: 'user',
                        drawerLabel: 'Meu Perfil',
                        headerTextColor: 'white',
                        headerBackgroundColor: COLORS.primaryDark,
                        iconColor: 'white'
                    }
                    return altHeaderOptions(props);
                }}
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
                    drawerLabel: 'Regras',
                    headerStyle: { backgroundColor: COLORS.primaryLight },
                }}
            />
            <Drawer.Screen name='help' component={Help}
                options={{
                    drawerIcon: () => (<Feather name={'help-circle'} size={18} color={'#fff'} />),
                    drawerLabel: 'Ajuda'
                }}
            />
            <Drawer.Screen name='about' component={About}
                options={({ navigation }) => {
                    let props = {
                        navigation: navigation,
                        drawerIconName: 'alert-circle',
                        drawerLabel: 'Sobre',
                        headerTextColor: 'white',
                        headerBackgroundColor: COLORS.primaryDark,
                        iconColor: 'white'
                    }
                    return altHeaderOptions(props);
                }}
            />
            <Drawer.Screen name='rescue' component={Rescue}
                options={rescueScreenOptions}
            />
            <Drawer.Screen name='rescue-success' component={RescueSuccess}
                options={rescueScreenOptions}
            />
            <Drawer.Screen name='delete-account' component={DeleteAccount}
                options={{ drawerItemStyle: { height: 0 } }}
            />
        </Drawer.Navigator>
    )
}

const altHeaderOptions = ({ navigation, drawerIconName, drawerLabel, headerTextColor, headerBackgroundColor, iconColor }) => ({
    drawerIcon: () => (<Feather name={drawerIconName} size={18} color={'#fff'} />),
    drawerLabel: drawerLabel,
    headerTitleStyle: {
        fontFamily: 'OpenSans',
        color: headerTextColor,
        fontSize: 14,
        lineHeight: 30,
        fontWeight: '800',
        letterSpacing: 1.5,
        alignSelf: 'center',
    },
    headerStyle: { backgroundColor: headerBackgroundColor },
    headerLeft: () => (
        <HamburgerIcon onPress={() => navigation.openDrawer()} color={headerTextColor} rippleColor={COLORS.primaryLight}/>
    ),
    headerRight: () => (
        <Pressable onPress={() => navigation.navigate('home')}>
            <Image
                source={iconColor == 'white' ? require("../assets/logo-w.png") : require("../assets/logo-g.png")}
                style={{ width: 30, height: 30, marginRight: 20 }}
            />
        </Pressable>
    ),
})

const rescueScreenOptions = ({ navigation }) => ({
    headerStyle: { backgroundColor: COLORS.primaryLight },
    headerLeft: () => (
        <BackIcon onPress={() => navigation.goBack()}
            color={COLORS.primaryDark}
            rippleColor={COLORS.primaryDark}
        />
    ),
    headerRight: () => null,
    drawerItemStyle: { height: 0 }
})