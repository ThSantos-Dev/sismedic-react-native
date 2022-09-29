import React from 'react'
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView } from "react-native";


const Splash = () => {
  return (
      <View style={styles.container}>
          <ImageBackground source={require('../../assets/img/splash.png')} style={styles.imageBackground}>
              <Image source={require('../../assets/img/large_logo.png')} />
          </ImageBackground>
      </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center"
    }
});