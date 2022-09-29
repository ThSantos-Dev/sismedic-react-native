// React Native
import { StyleSheet, Text, TextInput, View } from 'react-native';

// React
import React from 'react';

// Ícones
import Icon from 'react-native-vector-icons/Ionicons';

// Cores
import COLORS from '../../assets/color/Colors';

const Input = ({ label, placeholder, errorMessage, iconName, handlerOnChangeText, handlerOnFocus, children }) => {

    return (
        <View style={styles.formContainer}>
            {/* Funciona como label da Input */}
            {
                label &&
                <Text style={styles.label}>{label}</Text>
            }

            <View style={[styles.inputContainer, { borderColor: errorMessage ? COLORS.red : COLORS.darkBlue }]}>

                {
                    // Validação para verificar se foi enviado uma mensagem de erro que deve alterar o ícone a ser exibido
                    !errorMessage
                        ? children
                        : <Icon name="alert-circle-outline" style={styles.errorIcon} />

                }

                <TextInput
                    autoCorrect={false}
                    style={styles.input}
                    onChangeText={handlerOnChangeText}
                    onFocus={handlerOnFocus}
                    placeholder={placeholder}
                    autoCapitalize={'words'}
                />
            </View>

            {errorMessage &&
                <Text style={styles.errorMessage}>
                    {errorMessage}
                </Text>}


        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        marginBottom: 16,
    },
    label: {
        color: COLORS.gray,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    inputContainer: {
        height: 40,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10
    },

    input: {
        flex: 1,
        color: COLORS.darkBlue,
        fontSize: 20,
        fontWeight: '400',
        paddingBottom: 7,
    },

    errorMessage: {
        paddingStart: 10,
        color: COLORS.red,
        textTransform: 'uppercase'

    },
    errorIcon: {
        color: COLORS.red,
        fontSize: 22,
        marginRight: 10
    },

    icon: {
        fontSize: 22,
        color: COLORS.darkBlue,
        marginRight: 14
    }

});

export default Input;