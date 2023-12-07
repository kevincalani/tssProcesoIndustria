import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,TextInput,Button} from 'react-native'

export default function DistBinomial() {
  return (
    <SafeAreaView style={styles.PageContainer}>
        <View style={styles.PageContainer}>
      <Text style={styles.title}>Distribucion Binomial</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Muestra"
          name="muestra"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Probabilidad de Exito"
          name="Probabilidad de Exito"
    
        />
      </View>
      
      <Button  title="Guardar Datos" color="#0F52BA" />
    </View>
        
    </SafeAreaView>
  )
  
}
const styles = StyleSheet.create({
    PageContainer: {
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