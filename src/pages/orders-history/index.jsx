import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderCard from '../../components/OrderCard';
import { COLORS } from '../../utils/AppStyles'
import appStyles from '../../utils/AppStyles';

export default function OrderHistory() {
  return (
    <View style={appStyles.mainContainer}>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Text style={appStyles.title}>Cupons</Text>
        <OrderCard title="Kit Devassa" subtitle="350ml" textRigthLabel="Desconto:" textRight="R$ 12,00" />
        <OrderCard title="Kit Devassa" subtitle="350ml" textRigthLabel="Desconto:" textRight="R$ 12,00" active={false} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
 
});