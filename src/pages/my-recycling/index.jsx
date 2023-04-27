import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderCard from '../../components/OrderCard';
import { COLORS } from '../../utils/AppStyles'
import appStyles from '../../utils/AppStyles';

export default function MyRecycling() {
    
  return (
    <View style={appStyles.mainContainer}>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={appStyles.title}>Minhas Reciclagens</Text>
        <Text style={[appStyles.text, styles.saldoLabel]}>
          Saldo:
          <Text style={[appStyles.text, styles.saldoValue]}> R$ 7,00</Text></Text>
        <OrderCard title="R$ 0,80" subtitle="10/04/2023" textRigthLabel="Código: " textRight="NPXYT5345" button={false} />
        <OrderCard title="R$ 0,20" subtitle="27/03/2023" textRigthLabel="Código: " textRight="YRASDK789" button={false} />
        <OrderCard title="R$ 1,80" subtitle="01/03/2023" textRigthLabel="Código: " textRight="FDASKJ680" button={false} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  saldoLabel: { 
    marginTop: 30, 
    marginBottom: 20, 
    color: COLORS.primaryDark 
  },

  saldoValue: { 
    fontSize: 32, 
    fontFamily: 'WorkSans', 
    color: COLORS.primaryDark 
  }
});