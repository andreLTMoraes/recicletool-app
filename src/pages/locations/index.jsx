import { View, Text, StyleSheet, Pressable } from "react-native";
import appStyles from "../../utils/AppStyles";
import { COLORS } from "../../utils/AppStyles";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Locations() {
    return (
        <View style={appStyles.mainContainer}>
            <Text style={appStyles.title}>Pontos de coleta</Text>
            <CardColeta 
                addressLabel="Supermecado Hiperbom" 
                adress="Avenida Doutor José Rufino, 122, Areias, Recife-PE" 
            />
        </View>
    );
}

const CardColeta = ({ addressLabel, adress }) => {
    return (
        <View style={styles.cardColeta}>
            <View style={styles.cardColetaTextArea}>
                <Text style={[appStyles.title, { color: 'white', fontSize: 16 }]}>{addressLabel}</Text>
                <Text style={[appStyles.text, { color: 'white', textAlign: 'left' }]}>{adress}</Text>
            </View>
            <View style={styles.cardColetaIconsArea}>
                <IconContainer label="Maps">
                    <MaterialCommunityIcons name={'google-maps'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
                <IconContainer label="Waze">
                    <FontAwesome5 name={'waze'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
                <IconContainer label="Uber">
                    <FontAwesome5 name={'uber'} color={COLORS.primaryDark} size={30} />
                </IconContainer>
            </View>

        </View>
    )
}

const IconContainer = ({ children, label, onPress }) => {
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
            <Pressable 
                android_ripple={{ color: COLORS.primaryDark }} 
                style={{ padding: 5, alignItems: 'center' }}
                onPress={onPress}
            >
                {children}
                {
                    label !== undefined?
                        <Text style = {[appStyles.text, {fontSize: 10, color: COLORS.primaryDark}]}>{label}</Text>
                        : null 
                }
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    cardColeta: {
        width: "80%",
        minHeight: 200,
        backgroundColor: COLORS.primaryDark,
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 30,
    },

    cardColetaTextArea: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },

    cardColetaIconsArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.primaryLight,
    }
});