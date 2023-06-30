import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../utils/AppStyles'
import appStyles from '../utils/AppStyles';

export default function OrderCard({ title, subtitle, textRight, textRigthLabel,
    button = true, buttonLabel = 'RESGATAR', onPressButton, active = true }) {

    return (
        <View style={[styles.orderCard, { opacity: active ? 1 : 0.5 }]}>
            <View style={styles.orderCardLeft}>
                <Text style={[appStyles.text, styles.textTitle]}>{title}</Text>
                <Text style={[appStyles.text, styles.textSubtitle]}>{subtitle}</Text>
            </View>
            <View style={styles.orderCardRight}>
                <Text style={[appStyles.text, {fontFamily: 'WorkSans'}]}>{textRigthLabel}
                    <Text style={[appStyles.text, {fontFamily: 'WorkSans', fontWeight: '800', letterSpacing: 1}]}>    {textRight}</Text></Text>
                {
                    button &&
                    <Pressable style={styles.orderCardButton} onPress={active? onPressButton: () => {}} android_ripple={{color: COLORS.primaryLight}}>
                        <Text style={[appStyles.text, styles.textButton]}>{buttonLabel}</Text>
                    </Pressable>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    textTitle: { 
        fontFamily: 'WorkSans', 
        fontSize: 16, 
        lineHeight: 20, 
        color: COLORS.primaryDark 
    },

    textSubtitle: { 
        fontFamily: 'WorkSans', 
        fontSize: 14, 
        fontWeight: '400', 
        color: COLORS.primaryDark 
    },

    textButton: { 
        fontFamily: 'WorkSans', 
        color: 'white', 
        fontWeight: '700' 
    },

    orderCard: {
        backgroundColor: COLORS.primaryLight,
        alignSelf: 'center',
        width: '90%',
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