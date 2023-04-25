import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { COLORS } from '../../utils/AppStyles'
import Feather from 'react-native-vector-icons/Feather';

export default function Perfil() {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Olá, Júlia</Text>
        <View style={styles.mainCard}>
          <ProfileField label='Nome do Usuário'>
            <Text style={[styles.text, { color: COLORS.primaryDark }]}>Fulana de tal</Text>
          </ProfileField>
          <ProfileField label='Celular'>
            <Text style={[styles.text, { color: COLORS.primaryDark }]}>+55******40</Text>
          </ProfileField>
          <ProfileField label='CPF'>
            <Text style={[styles.text, { color: COLORS.primaryDark }]}>********54</Text>
          </ProfileField>
          <ProfileField label='Email'>
            <Text style={[styles.text, { color: COLORS.primaryDark }]}>nomedaconta@gmail.com</Text>
          </ProfileField>
          <ProfileField label='Senha'>
            <Text style={[styles.text, { color: COLORS.primaryDark }]}>Mudar senha</Text>
          </ProfileField>
          <ProfileField label='Notificações'>
            <Feather name={'toggle-left'} size={30} color={COLORS.primaryDark} />
          </ProfileField>
          <ProfileField label='Deletar conta'>
            <Feather name={'chevron-right'} size={30} color={COLORS.primaryDark} />
          </ProfileField>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const ProfileField = ({ children, label }) => {
  return (
    <View style={styles.profileField}>
      <Text style={styles.profileFieldText}>{label}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
    alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 30
  },

  title: {
    fontFamily: 'OpenSans',
    color: 'white',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center'
  },

  mainCard: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.offWhite,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    paddingTop: 30
  },

  profileField: {
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderColor: COLORS.primaryDark,
    paddingBottom: 20,
    marginTop: 10,
  },

  profileFieldText: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    color: '#161616'
  }
});