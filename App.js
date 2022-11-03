import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

// Constantes
import COLORS from "./src/assets/color/Colors";

// Views
import Splash from "./src/views/Splash/Splash";
import RegisterStepOne from "./src/views/Paciente/Register/RegisterStepOne";
import RegisterStepTwo from "./src/views/Paciente/Register/RegisterStepTwo";
import ListAll from "./src/views/Paciente/ListAll/ListAll";


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Paciente/Listagem/Todos'>
      <Stack.Screen name='Paciente/Cadastro/StepOne' component={RegisterStepOne} options={{title: 'Cadastro 1/2'}}/>
      <Stack.Screen name='Paciente/Cadastro/StepTwo' component={RegisterStepTwo} options={{title: 'Cadastro 2/2'}}/>
      <Stack.Screen name='Paciente/Listagem/Todos' component={ListAll} options={{ title: 'Listagem de pacientes' }} />
    </Stack.Navigator>
  </NavigationContainer>
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