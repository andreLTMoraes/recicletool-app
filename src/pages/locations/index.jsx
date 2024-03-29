import { View, Text, StyleSheet, Pressable, Linking, ScrollView, Share } from "react-native";
import * as Clipboard from 'expo-clipboard';
import appStyles from "../../utils/AppStyles";
import { COLORS } from "../../utils/AppStyles";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather'

export default function Locations() {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={appStyles.mainContainer}>
                <Text style={appStyles.title}>Pontos de coleta</Text>
                <CardColeta
                    addressTitle="Supermecado Hiperbom"
                    addressLabel="R. Benfica, 455 - Madalena, Recife - PE"
                    addressMaps="Escola Politécnica de Pernambuco - Rua Benfica - Madalena, Recife - PE"
                    addressWaze="Escola Politécnica de Pernambuco, R. Benfica, 455 - Madalena, Recife - PE, 50720-001, Brasil"
                    coordinatesUber={{latitude: -8.059480, longitude: -34.903420}}
                    shortLink="https://bit.ly/recicletool"
                />
            </View>
        </ScrollView>
    );
}

const CardColeta = ({ addressTitle, addressLabel, addressMaps, addressWaze, coordinatesUber, shortLink }) => {

    const uberUrl = `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${coordinatesUber.latitude}&dropoff[longitude]=${coordinatesUber.longitude}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressMaps)}`
    const wazeUrl = `https://www.waze.com/ul?q=${encodeURIComponent(addressWaze)}&navigate=yes`

    const shareConfig = {
        title: `Recicletool - Máquina de reciclagem - ${addressTitle}`,
        message: `Vem reciclar com a gente!\n\nNós aceitamos garrafas pet de 2L, e o nossa localização é a seguinte:\n\n${addressLabel}\n\n${shortLink}`
    }

    return (
        <View style={styles.cardColeta}>
            <View style={styles.cardColetaTextArea}>
                <Text style={[appStyles.title, { color: 'white', fontSize: 16 }]}>{addressTitle}</Text>
                <Pressable android_ripple={{color: COLORS.primaryLight}} onPress={() => Clipboard.setStringAsync(addressLabel)}>
                    <Text style={[appStyles.text, { color: 'white', textAlign: 'left' }]}>
                        {addressLabel + "  "}
                        <FontAwesome5 name={'copy'} color={'white'} size={12}/>
                    </Text>
                </Pressable>
            </View>
            <View style={styles.cardColetaIconsArea}>
                <IconContainer label="Maps" onPress={() => Linking.openURL(mapsUrl)}>
                    <MaterialCommunityIcons name={'google-maps'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
                <IconContainer label="Waze" onPress={() => Linking.openURL(wazeUrl)}>
                    <FontAwesome5 name={'waze'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
                <IconContainer label="Uber" onPress={() => Linking.openURL(uberUrl)}>
                    <FontAwesome5 name={'uber'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
                <IconContainer label = "Compartilhar" onPress={() => Share.share(shareConfig)}>
                    <Feather name={'share'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
            </View>

        </View>
    )
}

const IconContainer = ({ children, label, onPress }) => {
    return (
        <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
            <Pressable
                android_ripple={{ color: COLORS.primaryDark }}
                style={{ padding: 5, alignItems: 'center' }}
                onPress={onPress}
            >
                {children}
                {
                    label !== undefined ?
                        <Text style={[appStyles.text, { fontSize: 10, color: COLORS.primaryDark }]}>{label}</Text>
                        : null
                }
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    cardColeta: {
        width: "80%",
        minHeight: 180,
        backgroundColor: COLORS.primaryDark,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 30,
    },

    cardColetaTextArea: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 15,
    },

    cardColetaIconsArea: {
        minHeight: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
    }
});