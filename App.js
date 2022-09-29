import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

// Constantes
import COLORS from "./src/assets/color/Colors";

// Components
import Splash from "./src/views/Splash/Splash";
import Input from "./src/components/Input/Input";

// Ícones
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Accept from "./src/components/Accept/Accept";
import Button from "./src/components/Button/Button";
import Register from "./src/views/Register/Register";


const App = () => (
  <SafeAreaView style={styles.safeArea}>
    {/* <Splash /> */}

    <ScrollView style={styles.scrollView}>
      <Register />
    </ScrollView>
  </SafeAreaView>
);

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

export default App;