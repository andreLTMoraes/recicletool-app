import React, { useState, useRef, useContext } from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../contexts/Authentication';
import appStyles, { COLORS } from '../../utils/AppStyles'
import bg from '../../assets/cta-bg.png'
import logo from '../../assets/logo-w.png'
import Input from '../../components/Input';
import { SsnMask, PhoneMask } from '../../utils/masks';

export default function Register() {
    const { registerUser } = useContext(AuthContext)
    const navigation = useNavigation()
    const [data, setData] = useState({
      name: 'andre',
      ssn: '083.091.234-77',
      email: 'teste-teste@teste.com.br',
      phone: '(81)99735-8814',
      password: 'asdf',
      repass: 'asdf',
      term: true
    })

    const ssnRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const passRef = useRef(null)
    const rePassRef = useRef(null)



    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ImageBackground source={bg} resizeMode={'cover'} style={styles.header} imageStyle={styles.imageHeader}>
          <Image source={logo} style={styles.logo}/>
        </ImageBackground>
        <Text style={styles.title}>Cadastrar</Text>
        <View style={styles.form}>
          <Input
            label='NOME'
            icon='user'
            marginBottom={40}
            returnKeyType='next'
            onSubmitEditing={() => ssnRef.current.focus()}
            autoCapitalize='words'
            value={data.name}
            onChangeText={v => {
              setData({
                ...data,
                name: v
              })
            }}
          />
          <Input
            reference={ssnRef}
            label='CPF'
            icon='credit-card'
            marginBottom={40}
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => emailRef.current.focus()}
            value={data.ssn}
            onChangeText={v => {
              setData({
                ...data,
                ssn: SsnMask(v)
              })
            }}
          />
          <Input
            reference={emailRef}
            label='EMAIL'
            icon='at-sign'
            marginBottom={40}
            keyboardType='email-address'
            returnKeyType='next'
            onSubmitEditing={() => phoneRef.current.focus()}
            value={data.email}
            onChangeText={v => {
              setData({
                ...data,
                email: v
              })
            }}
          />

          <Input
            reference={phoneRef}
            label='CELULAR'
            icon='phone'
            marginBottom={40}
            keyboardType='numeric'
            returnKeyType='next'
            onSubmitEditing={() => passRef.current.focus()}
            value={data.phone}
            onChangeText={v => {
              setData({
                ...data,
                phone: PhoneMask(v)
              })
            }}
          />

          <Input
            reference={passRef}
            label='SENHA'
            icon='lock'
            marginBottom={40}
            returnKeyType='next'
            secureTextEntry
            onSubmitEditing={() => rePassRef.current.focus()}
            value={data.password}
            onChangeText={v => {
              setData({
                ...data,
                password: v
              })
            }}
          />

          <Input
            reference={rePassRef}
            label='CONFIRMAR SENHA'
            icon='lock'
            returnKeyType='done'
            secureTextEntry
            onSubmitEditing={() => registerUser(data)}
            value={data.repass}
            onChangeText={v => {
              setData({
                ...data,
                repass: v
              })
            }}
          />
          
          <TouchableOpacity
            style={[appStyles.btn3, {width: '100%', marginTop: 30, marginBottom: 16}]}
            onPress={() => registerUser(data)}
          >
            <Text style={appStyles.btnText3}>CADASTRAR</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <TouchableOpacity
                style={styles.saveCredential}
                onPress={() => setData({...data, term: !data.term})}
              >
              <Feather name={data.term ? 'check-square' : 'square'} size={24} color={COLORS.green}/>
            </TouchableOpacity>
            <Text style={styles.generalLabel}>Aceito o </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("out-rules")}
            >
              <Text style={styles.register}>termo de condições</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style='light' />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    content:{
      alignItems: 'center'
    },
    header: {
      width: '80%',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },
    imageHeader: {
      top: 0,
      left: (Dimensions.get('window').width*0.2)/2.5,
      borderBottomLeftRadius: Dimensions.get('window').width,
      borderBottomRightRadius: Dimensions.get('window').width,
      transform: [{scaleX: 2}]
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
      marginLeft: 20,
      marginBottom: 20
    },
    form: {
      flex: 0,
      width: '100%',
      maxHeight: '55%',
      paddingHorizontal: 20,
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