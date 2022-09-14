import React, { useState, useRef, useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/Authentication';
import appStyles, { COLORS } from '../../utils/AppStyles'
import bg from '../../assets/cta-bg.png'
import logo from '../../assets/logo-w.png'
import Input from '../../components/Input';

export default function Login() {
    const { loginEmail } = useContext(AuthContext)
    const navigation = useNavigation()
    const [data, setData] = useState({
      useremail: '',
      password: '',
      save: true
    })
    const passRef = useRef(null)



    return (
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode={'cover'} style={styles.header} imageStyle={styles.imageHeader}>
          <Image source={logo} style={styles.logo}/>
        </ImageBackground>
        <Text style={styles.title}>Entrar</Text>
        <KeyboardAwareScrollView style={styles.form}>
          <Input
            label='EMAIL'
            icon='mail'
            marginBottom={40}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => passRef.current.focus()}
            autoCapitalize='none'
            onChangeText={v => {
              setData({
                ...data,
                useremail: v
              })
            }}
          />
          <Input
            reference={passRef}
            label='SENHA'
            icon='lock'
            secureTextEntry
            onChangeText={v => {
              setData({
                ...data,
                password: v
              })
            }}
            onSubmitEditing={() => loginEmail(data)}
          />
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.saveCredential}
              onPress={() => setData({...data, save: !data.save})}
            >
              <Feather name={data.save ? 'check-square' : 'square'} size={24} color={COLORS.green}/>
              <Text style={styles.generalLabel}>Manter conectado</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotten}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[appStyles.btn3, {width: '100%', marginTop: 30, marginBottom: 16}]}
            onPress={() => loginEmail(data)}
          >
            <Text style={appStyles.btnText3}>ENTRAR</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.generalLabel}>Ainda não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("register")}
            >
              <Text style={styles.register}>CADASTRE-SE</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <StatusBar style='light' />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      width: '100%',
      height: 230,
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageHeader: {
      borderBottomLeftRadius: Dimensions.get('window').width/2,
      borderBottomRightRadius: Dimensions.get('window').width/2,
      transform: [{scaleX: 1.5}],
    },
    logo: {
      width: 80,
      height: 80,
      resizeMode: 'contain'
    },
    title: {
      color: COLORS.green,
      fontSize: 40,
      fontWeight: '900',
      alignSelf: 'flex-start',
      marginLeft: 20
    },
    form: {
      flex: 0,
      width: '100%',
      maxHeight: '55%',
      paddingHorizontal: 20,
    },
    optionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    saveCredential: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    generalLabel: {
      marginHorizontal: 4,
      fontSize: 16
    },
    forgotten: {
      color: COLORS.green,
      fontSize: 16
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    },
    register: {
      color: COLORS.green,
      fontWeight: '900',
      fontSize: 16
    }
  });