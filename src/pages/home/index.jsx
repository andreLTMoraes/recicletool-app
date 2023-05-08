import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList, ScrollView, Dimensions, ImageBackground } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { COLORS } from '../../utils/AppStyles'
import appStyles from '../../utils/AppStyles';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function Home({ navigation }) {
  return (
    <View style={appStyles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={appStyles.mainContainer}>
          <View style={[appStyles.container, styles.containerUpperLower]}>
            <Text style={[appStyles.title, { color: 'black' }]}>Saldo de reciclagem</Text>
            <View style={{ flex: 1, marginVertical: 20 }}>
              <CircularProgress
                value={5}
                maxValue={12}
                radius={105}
                valuePrefix={'R$ '}
                valueSuffix={',00'}
                activeStrokeWidth={20}
                inActiveStrokeWidth={20}
                inActiveStrokeColor={'#F2EDE4'}
                activeStrokeColor={COLORS.primaryDark}
                progressValueStyle={{ fontSize: 36, color: COLORS.primaryDark }}
              />
            </View>
            <Text style={[appStyles.text, { width: "50%" }]}>
              Falta <Text style={[appStyles.text, { fontWeight: '700' }]}>R$ 7,00</Text> para você <Text style={[appStyles.text, { color: COLORS.primaryDark }]}>resgatar</Text> nossos kits
            </Text>
          </View>
          <View style={[appStyles.container, styles.containerMiddle]}>
            <Pressable style={appStyles.container} android_ripple={{ color: COLORS.primaryLight }}>
              <View style={[appStyles.container, styles.containerMiddleBar]} >
                <Ionicons name='location-outline' size={22} color={COLORS.primaryDark} />
                <Text style={[appStyles.text, styles.containerMiddleFont]}>Continue{"\n"}reciclando</Text>
              </View>
            </Pressable>
            <Pressable style={appStyles.container} android_ripple={{ color: COLORS.primaryLight }}
              onPress={() => navigation.navigate('my-recycling')}
            >
              <View style={[appStyles.container, styles.containerMiddleBar, { borderRightWidth: 0 }]}>
                <MaterialIcons name='history' size={22} color={COLORS.primaryDark} />
                <Text style={[appStyles.text, styles.containerMiddleFont]}>Histórico de{"\n"}reciclagem</Text>
              </View>
            </Pressable>
          </View>
          <View style={[appStyles.container, styles.containerUpperLower, { marginBottom: 10 }]}>
            <FlatList horizontal={true}
              data={[{ resgatar: true }, { resgatar: true, backgroundColor: COLORS.secondary }, { resgatar: false, backgroundColor: COLORS.secondary }]}
              renderItem={({ item }) =>
                <ContainerResgate resgatar={item.resgatar}
                  text1={'R$ 12,00 de desconto no'} text2={'KIT DEVASSA 350ML'}
                  backgroundColor={item.backgroundColor} navigation={navigation} />}
            >
            </FlatList>
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}

function ContainerResgate({ resgatar, text1, text2, backgroundColor, navigation }) {
  return (
    <View style={[styles.containerResgate, { backgroundColor: backgroundColor ? backgroundColor : COLORS.primaryLight }]}>
      <View style={{ padding: '10%', width: '100%' }}>
        <Image source={require("../../../assets/devassaLatas.png")} style={styles.cartaoResgateImagem} resizeMode='contain' />
        <View>
          <Text style={[appStyles.text, { textAlign: 'left', alignSelf: 'flex-start' }]}>
            {text1}{'\n'}
            <Text style={{ fontWeight: '700' }}>{text2}</Text>
          </Text>
        </View>
      </View>
      {resgatar ?
        <Pressable style={styles.botaoResgatar} onPress={() => navigation.navigate('rescue')} android_ripple={{ color: COLORS.primaryLight }}>
          <Text style={[appStyles.text, { fontWeight: '700', color: 'white' }]}>RESGATAR</Text>
        </Pressable> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({

  containerUpperLower: {
    flex: 2,
    width: "100%"
  },

  containerMiddle: {
    flex: 2,
    flexDirection: 'row',
    width: "90%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.primaryLight,
    marginTop: 15,
    marginBottom: 15,
    //padding: 1,
  },

  containerMiddleBar: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryLight,
    margin: 7,
  },

  containerMiddleFont: {
    color: COLORS.primaryDark,
    width: '80%'
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
    alignSelf: 'flex-start',
    width: 227,
    marginLeft: 20,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    paddingTop: 10,
  },

  botaoResgatar: {
    height: 50,
    backgroundColor: COLORS.primaryDark,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cartaoResgateImagem: {
    width: 180,
    height: 152,
  },
});