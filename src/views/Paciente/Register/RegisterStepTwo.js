import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import COLORS from '../../../assets/color/Colors'
import Input from '../../../components/Input/Input'

const RegisterStepTwo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/img/small_logo.png')} />
                <Text style={styles.description}>Bem vindo, cadastre-se e se permita ter a melhor experiência</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Dados do responsável:</Text>

                {/* Inputs */}
                <View>
                    <Input placeholder='Nome responsável' handlerOnChangeText={(text) => handleOnChange(text, 'nome', 'responsavel')}>
                        <IconIonicons name="person" style={styles.icon} />
                    </Input>

                    <Input placeholder='Número de telefone'>
                        <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} handlerOnChangeText={(text) => handleOnChange(text, 'telefone', 'responsavel')} />
                    </Input>
                </View>

                {/* Button */}
                <Button title='Finalizar' handlerOnPress={handleOnSubmit} />
            </View>
        </View>
    )
}

export default RegisterStepTwo

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        flexDirection: "column"
    },

    scrollView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.lightBlue
    },

    content: {
        flex: 1,
        width: '100%',

        alignSelf: "flex-end",

        paddingHorizontal: 18,
        paddingTop: 38,
        paddingBottom: 78,

        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        backgroundColor: COLORS.white
    },
    header: {
        height: 260,
        paddingHorizontal: 18,
        paddingVertical: 28,

    },

    description: {
        fontSize: 28,
        color: COLORS.white,
        fontWeight: "normal",
        paddingTop: 20
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.darkBlue,
        marginBottom: 16
    },

    icon: {
        fontSize: 24,
        color: COLORS.lightBlue,
        marginRight: 8
    }
});
