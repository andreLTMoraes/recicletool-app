import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import appStyle, {PROGRAM} from '../../utils/AppStyles'
import bg from '../../assets/cta-bg.png'
import logo from '../../assets/logo-w.png'
import footer from '../../assets/footer.png'

export default function Cta() {
    const navigation = useNavigation()

    return (
      <ImageBackground source={bg} resizeMode={'cover'} style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.logo} source={logo}/>
          <Text style={styles.title}>{PROGRAM}</Text>
          <TouchableOpacity
            style={appStyle.btn1}
            onPress={() => navigation.navigate('choice')}
          >
            <Text style={appStyle.btnText1}>COMEÇAR A RECICLAR</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Realização:</Text>
            <Image style={styles.footerImage} source={footer}/>
          </View>
        </View>
        <StatusBar style="light" />
      </ImageBackground>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: "flex-end",
    },
    content: {
      height: "70%",
      width: "100%",
      paddingBottom: 40,
      justifyContent: "space-between",
      alignItems: "center"
    },
    logo: {
      width: 130,
      height: 130,
      resizeMode: 'contain'
    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontWeight: '900'
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
