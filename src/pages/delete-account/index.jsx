import { View, Text, Pressable, StyleSheet } from "react-native";
import appStyles from "../../utils/AppStyles";
import { COLORS } from "../../utils/AppStyles";

export default function DeleteAccount({navigation}) {
    return (
        <View style={appStyles.mainContainer}>
            <Text style={appStyles.title}>Deletar conta</Text>
            <View style={styles.contentContainer}>
                <Text style={[appStyles.title, styles.centerText]}>
                    Poxa,{"\n"} Tem certeza que quer deletar sua conta?
                </Text>
                <Text style={[appStyles.text, styles.bottomTextTitle]}>
                    Deletando sua conta você pode <Text style={{ fontWeight: '700' }}>perder</Text>:
                </Text>
                <View style={[{ width: '70%' }]}>
                    {
                        vantagens.map((vantagem, idx) =>
                            <Text style={[appStyles.text, { textAlign: 'left' }]} key={idx}>
                                {`\u2022 ${vantagem}\n`}
                            </Text>
                        )
                    }
                </View>
                <Pressable style = {styles.button} onPress={() => navigation.navigate('perfil')} android_ripple={{ color: '#D3D3D3' }}>
                    <Text style = {styles.buttonText}>CANCELAR</Text>
                </Pressable>
                <Pressable style = {styles.button} onPress={() => navigation.navigate('home')} android_ripple={{ color: '#D3D3D3' }}>
                    <Text style = {styles.buttonText}>DELETAR CONTA</Text>
                </Pressable>
            </View>
        </View>
    );
}

const vantagens = [
    "Adipiscing tempus, turpis volutpat, pellentesque in accumsan ipsum.",
    "Aliquet non dis sollicitudin ultricies. Justo, risus nunc at et placerat nulla porttitor adipiscing convallis.",
    "At nibh aliquam sit mattis vitae interdum. Ut viverra adipiscing vel aliquam pretium, dolor viverra. Nulla ut."
]


const styles = StyleSheet.create({

    contentContainer: { 
        flex: 1,
        justifyContent: 'space-around', 
        alignItems: 'center', 
        width: '100%' 
    },

    centerText: {
        fontSize: 36,
        lineHeight: 49,
        width: '85%',
    },

    bottomTextTitle: {
        color: 'red'
    },

    button: {
        width: '50%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: COLORS.primaryDark,
        borderRadius: 50,
        overflow: 'hidden'
    },

    buttonText: {
        fontFamily: 'WorkSans',
        fontWeight: '700',
        fontSize: 15,
        color: COLORS.primaryDark,
        textAlign: 'center',
        letterSpacing: 1.25,
    }
});