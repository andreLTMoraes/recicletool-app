import { StyleSheet } from 'react-native'

export const PROGRAM = "Recicletool"

const colorsRecicletool =  {
    primaryDark: '#4EA674',
    primaryLight: '#DBF0D8',
    secondary: '#EDE5CF',
    offWhite: '#F8F8F8'
}

const colorsCocaCola = { 
    primaryDark: '#F40009',
    primaryLight: '#F4000933',
    secondary: '#F4000933',
    offWhite: '#F8F8F8'
}

const colorsHeiniken = {
    primaryDark: '#00704A',
    primaryLight: '#F49A97',
    secondary: '#F49A97',
    offWhite: '#F8F8F8'
}

export const COLORS = colorsRecicletool;

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
        color: COLORS.primaryDark,
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
    },
    btn3:{
        width: '80%',
        height: 52,
        backgroundColor: COLORS.primaryDark,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText3: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default appStyles