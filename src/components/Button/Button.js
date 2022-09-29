import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import COLORS from '../../assets/color/Colors'

const Button = ({ title, handlerOnPress }) => {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handlerOnPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.lightBlue,
        borderRadius: 10
    },
    title: {
        color: COLORS.white,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 24

    }
})
export default Button