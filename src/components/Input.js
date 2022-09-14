import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather'

import { COLORS } from '../utils/AppStyles';

export default function Input({
    label = 'Label',
    icon = 'feather',
    marginBottom = 12,
    reference,
    ...rest
}) {

    return(
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer, {marginBottom: marginBottom}]}>
                <Feather name={icon} size={24} color={COLORS.green}/>
                <TextInput
                    ref={reference}
                    style={styles.input}
                    selectionColor={COLORS.green}
                    {...rest}
                    blurOnSubmit={false}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        color: COLORS.green,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#c6c6c6',
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: 35,
        marginLeft: 8,
        fontSize: 16
    }
})