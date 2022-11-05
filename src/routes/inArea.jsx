import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import RecDrawer from '../components/Drawer'
import Feather from '@expo/vector-icons/Feather'

import Home from '../pages/home';
import Perfil from '../pages/perfil';
import MyRecycling from '../pages/my-recycling';
import OrderHistory from '../pages/orders-history';
import Rules from '../pages/rules';
import Help from '../pages/help';
import About from '../pages/about';

const Drawer = createDrawerNavigator();

export default function InArea() {
    return(
        <Drawer.Navigator 
            drawerContent={(props) => <RecDrawer {...props} />} 
            screenOptions={{
                drawerActiveTintColor: null,
                drawerActiveBackgroundColor: null,
                drawerLabelStyle: {
                    color: '#fff',
                    fontSize: 18,
                    marginLeft: -16
                }
            }}
        >
            <Drawer.Screen name='home' component={Home}
                options={{
                    drawerIcon: () => (<Feather name={'home'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Início'
                }}
            />
            <Drawer.Screen name='perfil' component={Perfil}
                options={{
                    drawerIcon: () => (<Feather name={'user'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Meus dados'
                }}
            />
            <Drawer.Screen name='my-recycling' component={MyRecycling}
                options={{
                    drawerIcon: () => (<Feather name={'refresh-cw'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Minhas reciclagens'
                }}
            />
            <Drawer.Screen name='order-history' component={OrderHistory}
                options={{
                    drawerIcon: () => (<Feather name={'award'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Histórico de cupons'
                }}
            />
            <Drawer.Screen name='in-rules' component={Rules}
                options={{
                    drawerIcon: () => (<Feather name={'edit'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Regras'
                }}
            />
            <Drawer.Screen name='help' component={Help}
                options={{
                    drawerIcon: () => (<Feather name={'help-circle'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Ajuda'
                }}
            />
            <Drawer.Screen name='about' component={About}
                options={{
                    drawerIcon: () => (<Feather name={'alert-circle'} size={18} color={'#fff'}/>),
                    drawerLabel: 'Sobre'
                }}
            />
        </Drawer.Navigator>
    )
}