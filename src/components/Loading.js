import React from 'react'
import { View, ActivityIndicator, Text} from 'react-native'

import { COLORS } from '../utils/AppStyles'

export default function Loading() {
    const FaceLoading = () => <Facebook />
    return(
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#00000099',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10
        }}>
            <View style={{
                width: 200,
                height: 200,
                backgroundColor: '#000000cc',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator color={COLORS.green} size='large' />
                <Text style={{color: '#fff', marginTop: 20}}>Carregando...</Text>
            </View>
        </View>
    )
}