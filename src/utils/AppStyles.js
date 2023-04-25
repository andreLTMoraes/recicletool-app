import { StyleSheet } from 'react-native'

export const PROGRAM = "Recicletool"

const colorsRecicletool =  {
    primaryDark: '#4EA674',
    primaryLight: '#DBF0D8',
    secondary: '#EDE5CF',
    offWhite: '#F8F8F8'
}

const colorsCocaCola = {
    primaryDark: '#E31937',
    primaryLight: '#FDE8E8',
    secondary: '#F9E0B7',
    offWhite: '#F6F6F6',
  };
  
  const colorsHeineken = {
    primaryDark: '#005D35',
    primaryLight: 'rgba(164, 203, 78, 0.5)',
    secondary: 'rgba(255, 47, 41, 0.5)',
    offWhite: '#F1F1F1',
  };
  
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