import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderCard from '../../components/OrderCard';
import { COLORS } from '../../utils/AppStyles'

export default function MyRecycling() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.text}>Minhas Reciclagens</Text>
        <Text style={[styles.text, { fontWeight: '400', marginTop: 35, marginBottom: 25 }]}>Saldo:
          <Text style={[styles.text, { fontSize: 32, fontFamily: 'WorkSans' }]}> R$ 7,00</Text></Text>
        <OrderCard title="R$ 0,80" subtitle="10/04/2023" textRigthLabel="Código: " textRight="NPXYT5345" button={false} />
        <OrderCard title="R$ 0,20" subtitle="27/03/2023" textRigthLabel="Código: " textRight="YRASDK789" button={false} />
        <OrderCard title="R$ 1,80" subtitle="01/03/2023" textRigthLabel="Código: " textRight="FDASKJ680" button={false} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: '5%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.primaryDark
  },
});