import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.containerUpperLower, {marginTop: 10}]}>
        <Text style = {[styles.text, {fontWeight: '700'}]}>Saldo de reciclagem</Text>
        <View style = {{height: '80%'}}></View>
        <Text style = {[styles.text, {width: "50%"}]}>
          Falta <Text style = {[styles.text, {fontWeight: '700'}]}>R$ 7,00</Text> para você <Text style = {[styles.text, {color: '#4EA674'}]}>resgatar</Text> nossos kits
        </Text>
      </View>
      <View style={[styles.container, styles.containerMiddle]}>
        <Pressable style={[styles.container, styles.containerMiddleBar]}>
          <Image source = {require("../../../assets/localizationIcon.png")} style = {styles.localizationIcon}/>
          <Text style = {[styles.text, styles.containerMiddleFont]}>Continue reciclando</Text>
        </Pressable>
        <Pressable style={styles.container}>
        <Image source = {require("../../../assets/historyIcon.png")} style = {styles.historyIcon}/>
          <Text style = {[styles.text, styles.containerMiddleFont]}>Histórico de reciclagem</Text>
        </Pressable>
      </View>
      <View style={[styles.container, styles.containerUpperLower]}>
        <Text>Home Page</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerUpperLower: {
    flex: 2.5,
    width: "100%"
  },

  text: {
    fontFamily: 'OpenSans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    color: 'black'
  },

  containerMiddle: {
    flex: 1,
    flexDirection: 'row',
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EDE5CF',
    marginTop: 20,
    marginBottom: 20,
  },

  containerMiddleBar: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightWidth: 1,
    borderRightColor: '#EDE5CF',
    height: "95%",
  },

  containerMiddleFont: {
    color: '#4EA674',
    width: '60%'
  },

  localizationIcon: {
    resizeMode: 'contain',
    height: 18,
  },

  historyIcon: {
    resizeMode: 'contain',
    height: 23.12,
  }
});