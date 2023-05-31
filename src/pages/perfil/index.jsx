import React, {useState, useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Switch, Button } from 'react-native';
import { COLORS } from '../../utils/AppStyles'
import Feather from 'react-native-vector-icons/Feather';
import appStyles from '../../utils/AppStyles';
import { NotificationContext } from '../../contexts/Notifications';
import * as Notifications from 'expo-notifications';

export default function Perfil({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[appStyles.mainContainer, { backgroundColor: COLORS.primaryDark }]}>
        <Text style={styles.title}>Olá, Júlia</Text>
        <View style={styles.mainCard}>
          <ProfileField label='Nome do Usuário'>
            <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>Fulana de tal</Text>
          </ProfileField>
          <ProfileField label='Celular'>
            <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>+55******40</Text>
          </ProfileField>
          <ProfileField label='CPF'>
            <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>********54</Text>
          </ProfileField>
          <ProfileField label='Email'>
            <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>nomedaconta@gmail.com</Text>
          </ProfileField>
          <ProfileField label='Senha'>
            <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>Mudar senha</Text>
          </ProfileField>
          <ProfileField label='Notificações'>
            <ToggleNotifications/>
          </ProfileField>
          <ProfileField label='Deletar conta'>
            <View style={{ overflow: 'hidden', borderRadius: 100, marginVertical: -10 }}>
              <Pressable 
                onPress={() => navigation.navigate('delete-account')} 
                android_ripple={{ color: COLORS.primaryDark }}
                style = {{padding: 5}}
              >
                <Feather name={'chevron-right'} size={30} color={COLORS.primaryDark} />
              </Pressable>
            </View>
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
      <Text style={appStyles.text}>{label}</Text>
      {children}
    </View>
  )
}

const ToggleNotifications = () => {
  
  const [isEnabled, setIsEnabled] = useState(false);
  const { notificationsActive, changeNotificationsActive, expoPushToken, triggerNotifications } = useContext(NotificationContext);

  const toggleSwitch = (newState) => changeNotificationsActive(newState)

  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: COLORS.primaryDark}}
        thumbColor={isEnabled ? COLORS.primaryLight : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={notificationsActive}
        style = {{marginVertical: -10}}
    />
    <Text>{expoPushToken}</Text>
    <Button onPress={triggerNotifications} title="Trigger Local Notifications" color="#841584" accessibilityLabel="Trigger Local Notifications"/>
    </View>
  );
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

});