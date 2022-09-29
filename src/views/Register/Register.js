import React, { useState } from "react";
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

// Constantes
import COLORS from "../../assets/color/Colors";

// Components
import Input from "../../components/Input/Input";

// Ícones
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Accept from "../../components/Accept/Accept";
import Button from "../../components/Button/Button";


const Register = () => {

    const [show, setShow] = useState(true)

    const [paciente, setPaciente] = useState({
        nome: '',
        email: '',
        telefone: '',
        celular: ''
    })

    const [responsavel, setResponsavel] = useState({
        nome: '',
        telefone: ''
    })

    return (
        <View>
            {/* Primeira etapa */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/img/small_logo.png')} />
                    <Text style={styles.description}>Bem vindo, cadastre-se e se permita ter a melhor experiência</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Dados do paciente:</Text>

                    {/* Inputs */}
                    <View>
                        <Input placeholder='Digite seu nome'>
                            <IconIonicons name="person" style={styles.icon} />
                        </Input>

                        <Input placeholder='Digite seu e-mail'>
                            <IconZocial name="email" style={styles.icon} />
                        </Input>

                        <Input placeholder='Digite seu telefone'>
                            <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} />
                        </Input>

                        <Input placeholder='Digite seu celular'>
                            <IconMaterialIcons name="smartphone" style={styles.icon} />
                        </Input>
                    </View>

                    {/* Accept */}
                    <Accept text={'Aceito ser contatado pela Symbian.'} />
                    <Accept text={'Concordo com todos os Termos de Serviço e  Polítca de Privacidade.'} />

                    {/* Button */}
                    <Button title='Continuar' />
                </View>
            </View>
            {/* Segunda etapa */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/img/small_logo.png')} />
                    <Text style={styles.description}>Bem vindo, cadastre-se e se permita ter a melhor experiência</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>Dados do responsável:</Text>

                    {/* Inputs */}
                    <View>
                        <Input placeholder='Nome responsável'>
                            <IconIonicons name="person" style={styles.icon} />
                        </Input>

                        <Input placeholder='Número de telefone'>
                            <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} />
                        </Input>
                    </View>

                    {/* Button */}
                    <Button title='Continuar' />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default Register;