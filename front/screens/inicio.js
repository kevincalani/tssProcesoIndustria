import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {

  const navigation = useNavigation();

  const navegacionPantallas =  () => {  
      navigation.navigate('Distribucion'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>Caso de Estudio 2</Text>
      <Text style={styles.title}>Proceso de Industria</Text>
      <Text style={styles.subtitle}>Una flecha será ensamblada en un cojinete como se muestra a continuación:</Text>
      <View style={styles.contImage}>
      <Image
        source={require('../images/ensamble.png')}
        style={styles.image}
        resizeMode="contain"
      /></View>
      <Text style={styles.subtitle}>Si X1, sigue una distribución normal con media 1.5 y variancia 0.0016 y X2 sigue esta misma distribución con media 1.48 y varianza 0.0009 determine:</Text>      
      <Text style={styles.subtitle}>a) La probabilidad de que haya interferencia.</Text>
      <Text style={styles.subtitle}>b) El número de veces que es necesario simular el experimento si se quiere que la probabilidad de interferencia estimada difiera de su valor verdadero en menos de 0.01, con un nivel de seguridad del 95%.</Text>
      <Text style={styles.subtitle}>Asuma que el programa es parametrizable por lo que pueden ingresar parámetros según otras distribuciones.</Text>
      <View style={styles.button}>
      <Button title="Comenzar" color="#0F52BA" onPress={navegacionPantallas}/>
      </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contImage:{
    alignItems:'center',
  },
  image: {
    width: 400,
    height: 100,
    marginBottom: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});