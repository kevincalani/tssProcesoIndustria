import React, {useState} from 'react'
import { ScrollView, Text, View, StyleSheet,TextInput,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function DistBinomial() {
  const [tableData, setTableData] = useState([]);
  const [probExito1, setProbExito1] = useState("0.5");
  const [numIntentos1, setNumIntentos1] = useState("10");
  const [probExito2, setProbExito2] = useState("0.5");
  const [numIntentos2, setNumIntentos2] = useState("10");
  const [numDatos, setNumDatos] = useState('10');
  const navigation = useNavigation();

  // Generador de variables con distribución binomial
  const distribucionBinomial = (numIntentos, probExito) => {
    let resultado = 0;
    for (let i = 0; i < numIntentos; i++) {
      if (Math.random() < probExito) {
        resultado++;
      }
    }console.log(resultado,"resul")
    return resultado;
  };
  const generadorDistBinomial = async (numIntentos1, probExito1,numIntentos2,probExito2,numDatos) => {
    const newData = [];

    for (let i = 1; i <= numDatos; i++) {
      const id = i;
      const x1 = distribucionBinomial(numIntentos1,probExito1);
      const x2 = distribucionBinomial(numIntentos2,probExito2);
      const interseccion = x1 > x2 ? 1 : 0;
      newData.push({ id, x1, x2, interseccion });
    }
    return newData
  }
    const navegacionPantallas = async () => {
      try {
        const newData = await generadorDistBinomial(numIntentos1, probExito1,numIntentos2,probExito2,numDatos);
        console.log("Tabla actualizada:", newData);
  
        setTableData(newData);
        navigation.navigate('Resultados', { tableData: newData });
      } catch (error) {
        console.error("Error al generar datos:", error);
      }
    };

  return (
    <ScrollView>
        <View style={styles.PageContainer}>
      <Text style={styles.title}>Distribucion Binomial</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>probabilidad de exito de X1</Text>
        <TextInput
          style={styles.input}
          placeholder="probabilidad de exito para x1"
          name="probExito1"
          value={probExito1}
          onChangeText={(text) => setProbExito1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Cantidad de Intentos para X1</Text>
        <TextInput
          style={styles.input}
          placeholder="Intentos para x1"
          name="numIntentos1"
          value={numIntentos1}
          onChangeText={(text) => setNumIntentos1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>probabilidad de exito de X2</Text>
        <TextInput
          style={styles.input}
          placeholder="probabilidad de exito para x2"
          name="probExito2"
          value={probExito2}
          onChangeText={(text) => setProbExito2(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Cantidad de Intentos para X1</Text>
        <TextInput
          style={styles.input}
          placeholder="Intentos para x2"
          name="numIntentos2"
          value={numIntentos2}
          onChangeText={(text) => setNumIntentos2(text)}
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
      
      <Button  title="Guardar Datos" color="#0F52BA" onPress={navegacionPantallas}/>
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
