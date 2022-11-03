import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import COLORS from '../../../assets/color/Colors'

const ListAll = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={styles.head}>
                    <Text style={styles.head_id}>ID</Text>
                    <Text style={styles.head_text}>Nome</Text>
                    <Text style={styles.head_text}>E-mail</Text>
                    <Text style={styles.head_text}>Celular</Text>
                    <Text style={styles.head_text}>Telefone</Text>
                    <Text style={styles.head_text}>Opções</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ListAll

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        paddingTop: 20
    },

    table_container: {
        width: '100%',
        flexDirection: 'column',
    },
    head: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: COLORS.lightBlue
    },

    head_text: {
        width: 200,
        fontSize: 16,
        color: COLORS.white,
        marginHorizontal: 20,
    },
    head_id: {
        width: 20,
        color: COLORS.white,
        marginHorizontal: 20
    }
})