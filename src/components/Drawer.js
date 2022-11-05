import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import { COLORS } from '../utils/AppStyles'

import logo from '../assets/logo-w.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function RecDrawer (props) {
    const navigation = useNavigation()

    return (
        <DrawerContentScrollView {...props} style={{backgroundColor: COLORS.green}}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo}/>
                <View style={styles.headerUserRow}>
                    <Text style={styles.headerUserLabel}>Test User</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('perfil')}
                    >
                        <Feather name={'edit-2'} size={18} color={'#fff'}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerEmailLabel}>test@email.com</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24
    },
    logo: {
        width: 80,
        height: 80
    },
    headerUserRow: {
        flexDirection: 'row',
        marginTop: 12
    },
    headerUserLabel: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 12
    },
    headerEmailLabel: {
        fontSize: 16,
        color: '#fff',
        marginTop: 8
    }
})