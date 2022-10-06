import { StyleSheet, Text, View } from 'react-native'
import CheckBox from 'react-native-check-box'
import React, { useState } from 'react'

const Accept = ({ text, handleOnClick }) => {

    const [isChecked, setIsChecked] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    style={styles.checkbox}
                    onClick={() => {
                        setIsChecked(!isChecked)
                        handleOnClick(!isChecked)
                    }}
                    isChecked={isChecked}
                />
                <Text style={styles.label}>{text}</Text>
            </View>
        </View>
    )
}

export default Accept

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        width: 25,
        height: 25,
        alignSelf: "center",
        marginRight: 5,
    },
    label: {
        fontSize: 16
    },
});
