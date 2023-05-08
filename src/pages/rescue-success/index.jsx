import { View, Image, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { COLORS } from '../../utils/AppStyles'
import appStyles from "../../utils/AppStyles";

export default function RescueResult({ navigation }) {

    const [success, setSuccess] = useState(true);

    return (
        <View style={{flex: 1}}>
            {
                success ?
                    <RescueSuccess navigation={navigation} /> : <RescueError navigation={navigation} />
            }
        </View>
    );
}

function RescueSuccess({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[appStyles.mainContainer, {backgroundColor: COLORS.primaryLight}]}>
                <View style={appStyles.container}></View>
                <View style={[appStyles.container, { flex: 4 }]}>
                    <Image source={require("../../assets/success-icon.png")} style={styles.successIcon} />
                    <View style = {{width: '100%', alignItems: 'center'}}>
                        <Text style={[appStyles.text, styles.title]}>Sucesso!</Text>
                        <Text style={[appStyles.text, styles.text]}>Seu cupom foi para seu histórico. O próximo passo é ir a um dos nosso supermercados parceiros e retirar seu kit com um de nossos atendente.</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('order-history')} android_ripple={{ color: COLORS.primaryDark }} style={{padding: 10}}>
                            <Text style={[appStyles.text, styles.textButton]}>HISTÓRICO DE CUPONS</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 10, padding: 10 }} onPress={() => navigation.navigate('home')} android_ripple={{ color: COLORS.primaryDark }}>
                            <Text style={[appStyles.text, styles.textButton]}>VOLTAR</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

function RescueError({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[appStyles.mainContainer, {backgroundColor: COLORS.primaryLight}]}>
                <View style={appStyles.container}></View>
                <View style={[appStyles.container, { flex: 4 }]}>
                    <Image source={require("../../assets/error-icon.png")} style={styles.successIcon} />
                    <View style = {{alignItems: 'center'}}>
                        <Text style={[appStyles.text, styles.title]}>Oops! Algo deu errado.</Text>
                        <Text style={[appStyles.text, styles.text]}>Falha ao gerar cupom.</Text>
                    </View>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <Pressable style={styles.button}>
                            <Text style={[appStyles.text, styles.textButton, { color: 'white' }]}>TENTAR NOVAMENTE</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 40 }}>
                            <Text style={[appStyles.text, styles.textButton]}>DÚVIDAS?</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 40 }} onPress={() => navigation.navigate('home')}>
                            <Text style={[appStyles.text, styles.textButton]}>VOLTAR</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    image: {
        flex: 2,
        width: '80%'
    },

    successIcon: {
        width: 120,
        height: 120,
    },

    title: {
        fontSize: 36,
        fontWeight: '700',
        textAlign: "center",
    },

    text: {
        opacity: 0.5,
        width: '60%', 
        marginTop: 25,
        textAlign: 'left'
    },

    textButton: {
        fontWeight: '700',
        color: COLORS.primaryDark,
        letterSpacing: 1
    },

    button: {
        width: '60%',
        paddingVertical: 15,
        backgroundColor: COLORS.primaryDark,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});