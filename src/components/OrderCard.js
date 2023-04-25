import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../utils/AppStyles'

export default function OrderCard({ title, subtitle, textRight, textRigthLabel,
    button = true, buttonLabel = 'RESGATAR', onPressButton, active = true }) {

    return (
        <View style={[styles.orderCard, { opacity: active ? 1 : 0.5 }]}>
            <View style={styles.orderCardLeft}>
                <Text style={[styles.text, { fontSize: 16, lineHeight: 20 }]}>{title}</Text>
                <Text style={[styles.text, { fontSize: 14, fontWeight: '400' }]}>{subtitle}</Text>
            </View>
            <View style={styles.orderCardRight}>
                <Text style={styles.textRigthLabel}>{textRigthLabel}
                    <Text style={styles.textRight}>    {textRight}</Text></Text>
                {
                    button &&
                    <Pressable style={styles.orderCardButton} onPress={active? onPressButton: () => {}}>
                        <Text style={[styles.text, { color: 'white' }]}>{buttonLabel}</Text>
                    </Pressable>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    text: {
        fontFamily: 'WorkSans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
        color: COLORS.primaryDark
    },

    textRigthLabel: {
        color: 'black',
        fontWeight: '400',
        fontFamily: 'OpenSans', 
        fontSize: 14,
        lineHeight: 19,
    },

    textRight: {
        color: 'black',
        fontWeight: '800',
        fontFamily: 'OpenSans',
        letterSpacing: 1,
    },

    orderCard: {
        backgroundColor: COLORS.primaryLight,
        width: '100%',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        minHeight: 150,
        paddingVertical: 30
    },

    orderCardLeft: {
        borderRightWidth: 1,
        borderStyle: 'dashed',
        borderColor: COLORS.primaryDark,
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        alignSelf: 'stretch'
    },

    orderCardRight: {
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    orderCardButton: {
        height: 35,
        borderRadius: 15,
        backgroundColor: COLORS.primaryDark,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }

});