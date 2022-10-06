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

    const [steps, setSteps] = useState({
        one: true,
        two: false
    })

    const [paciente, setPaciente] = useState({
        nome: '',
        email: '',
        telefone: '',
        celular: '',
        accept_terms: false
    })

    const [responsavel, setResponsavel] = useState({
        nome: '',
        telefone: ''
    })

    const [errors, setErrors] = useState({
        nome: null,
        email: null,
        telefone: null,
        celular: null,
    })

    // Função responsável por atualizar os dados das states 
    const handleOnChange = (value, input, user) => {
        if (user === "paciente") {
            setPaciente((prevState) => ({ ...prevState, [input]: value }))
            return
        }

        setResponsavel((prevState) => ({ ...prevState, [input]: value }))
        return
    }

    const nextStep = () => {
        setSteps({ one: false, two: true })
    }

    const handleOnSubmit = () => {
        // Montando um objeto com as informações
        const data = {
            paciente: { ...paciente },
            responsavel: { ...responsavel }
        }

        setSteps({ one: true, two: false })

        console.log(data)

    }

    // Valida os campos do Paciente
    const handleValidade = () => {
        if (!paciente.nome || paciente.nome.trim().length < 5)
            return setErrors({ ...errors, nome: 'Esse campo é obrigatório!' })

        if (!paciente.email || paciente.email.trim().length < 10 || !paciente.email.includes('@') || !paciente.email.includes('.com'))
            return setErrors({ ...errors, email: 'Esse campo é obrigatório. Insira um e-mail válido!' })

        if (!paciente.telefone || paciente.telefone.trim().length !== 10)
            return setErrors({ ...errors, telefone: 'Preencha com um número de telefone válido. Ex: 1140028922' })

        if (!paciente.celular || paciente.celular.trim().length !== 11)
            return setErrors({ ...errors, celular: 'Preencha com um número de celular válido. Ex: 11940028922' })

        // Chamando a proxima step
        nextStep()
    }

    return (
        <View>
            {steps.one && (
                <>
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
                                <Input placeholder='Digite seu nome' handlerOnChangeText={(text) => handleOnChange(text, 'nome', 'paciente')} errorMessage={errors.nome} handlerOnFocus={() => setErrors({ ...errors, nome: null })}>
                                    <IconIonicons name="person" style={styles.icon} />
                                </Input>

                                <Input placeholder='Digite seu e-mail' handlerOnChangeText={(text) => handleOnChange(text, 'email', 'paciente')} errorMessage={errors.email} handlerOnFocus={() => setErrors({ ...errors, email: null })}>
                                    <IconZocial name="email" style={styles.icon} />
                                </Input>

                                <Input placeholder='Digite seu telefone' handlerOnChangeText={(text) => handleOnChange(text, 'telefone', 'paciente')} errorMessage={errors.telefone} handlerOnFocus={() => setErrors({ ...errors, telefone: null })}>
                                    <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} />
                                </Input>

                                <Input placeholder='Digite seu celular' handlerOnChangeText={(text) => handleOnChange(text, 'celular', 'paciente')} errorMessage={errors.celular} handlerOnFocus={() => setErrors({ ...errors, celular: null })}>
                                    <IconMaterialIcons name="smartphone" style={styles.icon} />
                                </Input>
                            </View>

                            {/* Accept */}
                            <Accept text={'Aceito ser contatado pela Symbian.'} />
                            <Accept text={'Concordo com todos os Termos de Serviço e  Polítca de Privacidade.'} handleOnClick={(checked) => setPaciente({ ...paciente, accept_terms: checked })} />

                            {/* Button */}
                            <Button title='Continuar' handlerOnPress={handleValidade} disabled={!paciente.accept_terms} />
                        </View>
                    </View>
                </>
            )}

            {steps.two && (
                <>
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
                                <Input placeholder='Nome responsável' handlerOnChangeText={(text) => handleOnChange(text, 'nome', 'responsavel')}>
                                    <IconIonicons name="person" style={styles.icon} />
                                </Input>

                                <Input placeholder='Número de telefone'>
                                    <IconFoundation name="telephone" style={{ ...styles.icon, fontSize: 28, marginRight: 8, paddingStart: 4 }} handlerOnChangeText={(text) => handleOnChange(text, 'telefone', 'responsavel')} />
                                </Input>
                            </View>

                            {/* Button */}
                            <Button title='Finalizar' handlerOnPress={handleOnSubmit}/>
                        </View>
                    </View>
                </>
            )}
        </View >
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