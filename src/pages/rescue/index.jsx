import { View, Image, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { COLORS } from '../../utils/AppStyles'
import appStyles from "../../utils/AppStyles";

export default function Rescue({navigation}) {
    return (
        <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={[appStyles.mainContainer, {backgroundColor: COLORS.primaryLight}]}>
                <Image source={require("../../../assets/devassaLatas.png")} style={styles.image} resizeMode='contain' />
                <View style={styles.infoContainer}>
                    <View style={{ flex: 0.6, justifyContent: 'space-around' }}>
                        <Text style={[appStyles.text, styles.title]}>KIT DEVASSA 350ML</Text>
                        <Text style={[appStyles.text, {marginVertical: 20, textAlign: 'left'}]}>Descrição do kit: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec felis sit lacus adipiscing eu.</Text>
                    </View>
                    <View style={styles.button}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require("../../../assets/shop-icon.png")}
                                style={styles.buttonIcon} resizeMode="contain" />
                        </View>
                        <Pressable style={styles.buttonChip} onPress={() => navigation.navigate('rescue-success', {id: 'abcdefg'})} android_ripple={{ color: 'white' }}> 
                            <Text style={[appStyles.text, styles.textButton]}>GERAR CUPOM</Text>
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

    infoContainer: {
        backgroundColor: '#F8F8F8',
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: '10%',
        paddingTop: '7.5%',
        paddingBottom: '12.5%'
    },

    title: {
        fontSize: 16,
        fontWeight: '700'
    },

    button: {
        width: '100%',
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },

    buttonChip: {
        backgroundColor: COLORS.primaryDark,
        flex: 4,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonIcon: {
        width: 25,
    },

    textButton: {
        fontWeight: '700',
        color: 'white',
        letterSpacing: 1
    }
});