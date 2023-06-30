import React from 'react'
import { View, ActivityIndicator, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'

import { COLORS } from '../utils/AppStyles'

export default function Modal({
    title = 'Modal Box',
    message = 'Modal message',
    okFunction = () => {}
}) {
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
                width: "80%",
                minHeight: 200,
                backgroundColor: '#fff',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: COLORS.primaryDark,
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 18
                }}>{title}</Text>

                <Text style={{marginHorizontal: 20}}>{message}</Text>

                <TouchableOpacity
                    style={{
                        borderTopWidth: 1,
                        borderTopColor: '#c6c6c6',
                        width: '100%',
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => okFunction()}
                >
                    <Text style={{
                        color: COLORS.primaryDark,
                        fontWeight: 'bold',
                        fontSize: 16
                    }}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}