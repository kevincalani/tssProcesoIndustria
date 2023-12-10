import React, {useState, useEffect} from 'react'
import { ScrollView, Text, View, StyleSheet,TextInput,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function DistExpo() {

  const [tableData, setTableData] = useState([]);
const [promedio1, setPromedio1] = useState ("0.5");
const [promedio2, setPromedio2] = useState ("0.5");
const [numDatos, setNumDatos] = useState('10');
const [distribucion, setDistribucion] = useState("Distribucion Exponencial")
const navigation = useNavigation();

  //generador de variables con distribucion exponencial
  const distribucionExponencial = (lambda) => {
    const aleatorio = Math.random();
    const resultado = (-Math.log(1 - aleatorio) / lambda).toFixed(5);
    return parseFloat(resultado); 
  };

const generadorDistExponencial = async (lambda1,lambda2, numDatos) => {
  const newData = [];

    for (let i = 1; i <= numDatos; i++) {
      const id = i;
      const x1 = distribucionExponencial(lambda1);
      const x2 = distribucionExponencial(lambda2);
      const interseccion = x1 > x2 ? 1 : 0;
      newData.push({ id, x1, x2, interseccion });
    }
    return newData;

};

const navegacionPantallas = async () => {
  try {
    const newData = await generadorDistExponencial(promedio1,promedio2, numDatos);
    console.log("Tabla actualizada:", newData);

    setTableData(newData);
    navigation.navigate('Resultados', { tableData: newData, distribucion: distribucion });
  } catch (error) {
    console.error("Error al generar datos:", error);
  }
};

  return (
    <ScrollView >
        <View style={styles.PageContainer}>
      <Text style={styles.title}>Distribucion Exponencial</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Promedio para X1</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el Promedio para X1"
          keyboardType="numeric"
          value={promedio1}
          onChangeText={(text) => setPromedio1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Promedio para X2</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el Promedio para X2"
          keyboardType="numeric"
          value={promedio2}
          onChangeText={(text) => setPromedio2(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Cantidad de Simulaciones</Text>
        <TextInput
          style={styles.input}
          placeholder="Cantidad de Datos Generados"
          keyboardType="numeric"
          value={numDatos}
          onChangeText={(text) => setNumDatos(text)}
        />
      </View>
      <Button  title="Generar Datos" color="#0F52BA" onPress={navegacionPantallas}/>
    </View>
        
    </ScrollView>
  )
  
}
const styles = StyleSheet.create({
    PageContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      rowGap: 30,
      padding:32
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 5,
    },
    inputContainer: {
      width: 300,
      marginBottom: 0,
    },
    input: {
      height: 40,
      padding: 10,
      fontSize: 16,
      borderRadius: 10,
      borderColor: "#ccc",
      borderWidth: 1,
    },
  });