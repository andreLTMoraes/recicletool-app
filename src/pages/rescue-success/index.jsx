import { View, Image, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";

export default function RescueResult({ navigation }) {

    const [success, setSuccess] = useState(false);

    return (
        <View style={styles.mainContainer}>
            {
                success ?
                    <RescueSuccess navigation={navigation}/> : <RescueError navigation={navigation}/>
            }
        </View>
    );
}

function RescueSuccess({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.container}></View>
                <View style={[styles.container, { flex: 4 }]}>
                    <Image source={require("../../assets/success-icon.png")} style={styles.successIcon} />
                    <Text style={styles.title}>Sucesso!</Text>
                    <Text style={[styles.text, { width: '60%' }]}>Seu cupom foi para seu histórico. O próximo passo é ir a um dos nosso supermercados parceiros e retirar seu kit com um de nossos atendente.</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.navigate('order-history')}>
                            <Text style={styles.textButton}>HISTÓRICO DE CUPONS</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 20 }} onPress={() => navigation.navigate('home')}>
                            <Text style={styles.textButton}>VOLTAR</Text>
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
            <View style={styles.mainContainer}>
                <View style={styles.container}></View>
                <View style={[styles.container, { flex: 4 }]}>
                    <Image source={require("../../assets/error-icon.png")} style={styles.successIcon} />
                    <Text style={styles.title}>Oops! Algo deu errado.</Text>
                    <Text style={[styles.text, { width: '60%' }]}>Falha ao gerar cupom.</Text>
                    <View style={{ alignItems: 'center', width: '100%' }}>
                        <Pressable style = {styles.button}>
                            <Text style={[styles.textButton, {color: 'white'}]}>TENTAR NOVAMENTE</Text>
                        </Pressable>
                        <Pressable style={{ marginTop: 40 }}>
                            <Text style={styles.textButton}>DÚVIDAS?</Text>
                        </Pressable> 
                        <Pressable style={{ marginTop: 40 }} onPress={() => navigation.navigate('home')}>
                            <Text style={styles.textButton}>VOLTAR</Text>
                        </Pressable>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#dbf0d8',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    image: {
        flex: 2,
        width: '80%'
    },

    successIcon: {
        width: 100,
        height: 100,
    },

    title: {
        fontFamily: 'OpenSans',
        fontSize: 36,
        fontWeight: '700'
    },

    text: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        fontWeight: '400',
        opacity: 0.5
    },

    textButton: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        fontWeight: '700',
        color: '#4ea674',
        letterSpacing: 1
    },

    button: {
        width: '60%',
        paddingVertical: 15,
        backgroundColor: '#4ea674',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

});