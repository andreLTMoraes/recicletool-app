import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function Home() {
  return (
    <View style={[styles.container, styles.mainContainer]}>
      <View style={[styles.container, styles.containerUpperLower]}>
        <Text style={[styles.text, { fontWeight: '700' }]}>Saldo de reciclagem</Text>
        <View style={{ height: '80%' }}></View>
        <Text style={[styles.text, { width: "50%" }]}>
          Falta <Text style={[styles.text, { fontWeight: '700' }]}>R$ 7,00</Text> para você <Text style={[styles.text, { color: '#4EA674' }]}>resgatar</Text> nossos kits
        </Text>
      </View>
      <View style={[styles.container, styles.containerMiddle]}>
        <Pressable style={[styles.container, styles.containerMiddleBar]}>
          <Image source={require("../../../assets/localizationIcon.png")} style={styles.localizationIcon} />
          <Text style={[styles.text, styles.containerMiddleFont]}>Continue reciclando</Text>
        </Pressable>
        <Pressable style={styles.container}>
          <Image source={require("../../../assets/historyIcon.png")} style={styles.historyIcon} />
          <Text style={[styles.text, styles.containerMiddleFont]}>Histórico de reciclagem</Text>
        </Pressable>
      </View>
      <View style={[styles.container, styles.containerUpperLower]}>
        <ContainerResgate resgatar={true} text1={'R$ 12,00 de desconto no'} text2={'KIT DEVASSA 350ML'}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ContainerResgate({ resgatar, text1, text2 }) {
  return (
    <View style={styles.containerResgate}>
      <View style={{ flex: 4, padding: '10%', width: '100%' }}>
        <Image source={require("../../../assets/devassaLatas.png")} style={{ flex: 4, alignSelf: 'center', width: '80%' }}  resizeMode='contain' />
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={[styles.text, { textAlign: 'left', alignSelf: 'flex-start' }]}>
            {text1}{'\n'}
            <Text style={{ fontWeight: '700' }}>{text2}</Text>
          </Text>
        </View>
      </View>
      {resgatar ?
        <Pressable style={styles.botaoResgatar}>
          <Text style = {[styles.text, {fontWeight: '700', color: 'white'}]}>RESGATAR</Text>
        </Pressable> : null
      }
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

  mainContainer: {
    padding: '5%',
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
    width: "100%",
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
  },

  containerResgate: {
    flex: 1,
    alignSelf: 'flex-start',
    width: '75%',
    backgroundColor: '#DBF0D8',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  botaoResgatar: { 
    flex: 1, 
    backgroundColor: '#4EA674', 
    borderBottomRightRadius: 10, 
    borderBottomLeftRadius: 10, 
    width: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
});