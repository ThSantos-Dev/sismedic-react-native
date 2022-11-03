import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../../assets/color/Colors'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import ToastManager, { Toast } from 'toastify-react-native'

import pacienteService from '../../../services/pacienteService'

const RegisterStepTwo = ({ navigation, route }) => {

    const [responsavel, setResponsavel] = useState({
        nome: "",
        telefone: ""
    })

    const handleOnChange = (value, input) => {
        setResponsavel((prevState) => ({ ...prevState, [input]: value }))
        return
    }

    const handleSubmit = async () => {
        const paciente = route.params

        // Montando um objeto 
        const data = {
            nome_paciente: paciente.nome,
            email_paciente: paciente.email,
            celular_paciente: paciente.celular,
            telefone_paciente: paciente.telefone,

            nome_responsavel: responsavel.nome,
            telefone_responsavel: responsavel.telefone
        }

        const res = await pacienteService.register(data)

        if (res.error)
            Toast.error(res.error)

        if (res.success) {
            Toast.success(res.success, 'center')

            setInterval(() => 
                navigation.navigate('Paciente/Listagem/Todos')
            , 3000)
        }


        console.log(res)

    }


    return (
        <View style={styles.container}>
            <ToastManager style={{ width: '90%', paddingHorizontal: 10, height: 120, textAlign: 'center' }} />
            <View style={styles.header}>
                <Image source={require('../../../assets/img/small_logo.png')} />
                <Text style={styles.description}>Bem vindo, cadastre-se e se permita ter a melhor experiência</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Dados do responsável:</Text>

                {/* Inputs */}
                <View>
                    <Input placeholder='Nome responsável' handlerOnChangeText={(text) => handleOnChange(text, 'nome')}>
                        <IconIonicons name="person" style={styles.icon} />
                    </Input>

                    <Input placeholder='Número de telefone' type="numeric" maxLength={10}>
                        <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} handlerOnChangeText={(text) => handleOnChange(text, 'telefone')} />
                    </Input>
                </View>

                {/* Button */}
                <Button title='Finalizar' handlerOnPress={handleSubmit} />
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
