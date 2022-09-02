import { StyleSheet } from 'react-native'

export const PROGRAM = "Recicletool"

export const COLORS = {
    green: "#4EA674"
}

const appStyles = StyleSheet.create({
    btn1:{
        width: '80%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText1: {
        color: COLORS.green,
        fontSize: 16,
        fontWeight: 'bold'
    },
    btn2:{
        height: 52,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText2: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default appStyles