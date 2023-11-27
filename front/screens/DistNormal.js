import { SafeAreaView, Text, View } from 'react-native'
import {
    StyleSheet,
    TextInput,
    Button,
  } from "react-native";


export default function DistNormal() {
  return (
    <SafeAreaView>
        <View style={styles.loginPageContainer}>
      <Text style={styles.title}>Distribucion Normal</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Media"
          name="media"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Varianza"
          name="Varianza"
    
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Desv. Estandar"
          name="Desv. Estandar"
          
        />
      </View>
      
      <Button  title="Guardar Datos" color="#0F52BA" />
    </View>
        
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
    loginPageContainer: {
      flex: 1,
      backgroundColor: "#EAF2F8",
      alignItems: "center",
      justifyContent: "center",
      rowGap: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    inputContainer: {
      width: 300,
      height: 40,
      borderRadius: 10,
      borderColor: "#ccc",
      borderWidth: 1,
    },
    input: {
      height: 40,
      padding: 10,
      fontSize: 16,
    },
  });