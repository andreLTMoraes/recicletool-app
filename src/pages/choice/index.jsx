import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import appStyle, {COLORS, PROGRAM} from '../../utils/AppStyles'
import logo from '../../assets/logo-w.png'
import footer from '../../assets/footer.png'

export default function Choice() {
    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image style={styles.logo} source={logo}/>
            <Text style={styles.title}>Olá!</Text>
          </View>
          <Text style={styles.text}>Bem-vindo ao Recicla {PROGRAM} - o seu programa de reciclagem da Recicletool que transforma embalagens vazias em descontos.</Text> 
          <View style={styles.buttons}>
            <TouchableOpacity
                style={[appStyle.btn1, {minWidth: '60%'}]}
                onPress={() => navigation.navigate('login')}
            >
                <Text style={appStyle.btnText1}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.or}>OU</Text>
            <TouchableOpacity
                style={[appStyle.btn2, {minWidth: '60%'}]}
                onPress={() => navigation.navigate('register')}
            >
                <Text style={appStyle.btnText2}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Realização:</Text>
            <Image style={styles.footerImage} source={footer}/>
          </View>
        </View>
        <StatusBar style="light" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primaryDark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingBottom: 40,
        paddingTop: 60,
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    title: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '900',
        marginTop: 20
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        maxWidth: '50%'
    },
    buttons:{
        alignItems: 'center'
    },
    or: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 12
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        color: '#fff',
        fontSize: 16
    },
    footerImage: {
        maxWidth: '55%',
        height: 50,
        resizeMode: 'contain'
    }
  });