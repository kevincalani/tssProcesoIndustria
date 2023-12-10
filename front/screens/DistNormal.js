import { ScrollView, Text, View, StyleSheet,TextInput,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'


export default function DistNormal() {

  const [tableData, setTableData] = useState([]);
  const [media1, setMedia1] = useState ("1.5");
  const [varianza1, setVarianza1] = useState ("0.0016");
  const [media2, setMedia2] = useState ("1.48");
  const [varianza2, setVarianza2] = useState ("0.0009");
  const [numDatos, setNumDatos] = useState('10');
  const navigation = useNavigation();
  
    //generador de variables con distribucion normal
    const generadorDistribucionNormal = (media, varianza) => {
      const desviacionEstandar = Math.sqrt(varianza);
      let u1 = Math.random();
      let u2 = Math.random();
  
      // Aplicar transformaciones de Box-Muller
      let z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  
      // Aplicar la transformación para obtener la variable normal
      let x = media + desviacionEstandar * z1;
  
      return parseFloat(Number(x).toFixed(5));
    };
  
    const generadorDistNormal = async (media1, varianza1,media2,varianza2, numDatos) => {
      const newData = [];
  
      for (let i = 1; i <= numDatos; i++) {
        const id = i;
        const x1 = generadorDistribucionNormal(parseFloat(media1), parseFloat(varianza1));
        const x2 = generadorDistribucionNormal(parseFloat(media2), parseFloat(varianza2));
        const interseccion = x1 > x2 ? 1 : 0;
        newData.push({ id, x1, x2, interseccion });
      }

      return newData;
    };
  
  const navegacionPantallas = async () => {
    try {
      const newData = await generadorDistNormal(media1, varianza1,media2,varianza2, numDatos);
      console.log("Tabla actualizada:", newData);
  
      setTableData(newData);
      navigation.navigate('Resultados', { tableData: newData });
    } catch (error) {
      console.error("Error al generar datos:", error);
    }
  };



  return (
    <ScrollView >
        <View style={styles.PageContainer}>
      <Text style={styles.title}>Distribucion Normal</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Media para X1</Text>
        <TextInput
          style={styles.input}
          placeholder="Media para x1"
          name="media1"
          value={media1}
          onChangeText={(text) => setMedia1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Varianza para X1</Text>
        <TextInput
          style={styles.input}
          placeholder="Varianza para x1"
          name="Varianza1"
          value={varianza1}
          onChangeText={(text) => setVarianza1(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Media para X2</Text>
        <TextInput
          style={styles.input}
          placeholder="Media para x2"
          name="media2"
          value={media2}
          onChangeText={(text) => setMedia2(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>Varianza para X2</Text>
        <TextInput
          style={styles.input}
          placeholder="Varianza para x2"
          name="Varianza2"
          value={varianza2}
          onChangeText={(text) => setVarianza2(text)}
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
      padding: 32,
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