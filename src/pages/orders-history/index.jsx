import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderCard from '../../components/OrderCard';

export default function OrderHistory() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={styles.text}>Cupons</Text>
        <OrderCard title="Kit Devassa" subtitle="350ml" textRigthLabel="Desconto:" textRight="R$ 12,00" />
        <OrderCard title="Kit Devassa" subtitle="350ml" textRigthLabel="Desconto:" textRight="R$ 12,00" active={false} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    lineHeight: 19,
    textAlign: 'center',
    color: '#4EA674'
  },
});