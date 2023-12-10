import React, {useState, useEffect}from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native'
import jstat from 'jstat';

export default function Conclusiones({route}) {
  const tableData = route?.params?.tableData || [];
  const distribucion = route?.params?.distribucion || "";
  const [nivelSeguridad, setNivelSeguridad] = useState(95);
  const [valorDif, setValorDif] = useState(0.01);
  const [cantDatos, setCantDatos]= useState(tableData.length);

  const buscarZ = (area) => {
    try {
      const z = (jstat.normal.inv(area, 0, 1)*-1);

      return z.toFixed(2);
    } catch (error) {
      console.error('Error al buscar en la tabla de distribución normal:', error);
      return null;
    }
  };

  const porcentajeInterferencia =(tableData) =>{
    if (tableData.length === 0) {
      return 0; // Evitar división por cero si no hay datos
    }
  
    let contador = 0;
  
    for (const item of tableData) {
      if (item.interseccion === 1) {
        contador++;
      }
    }
  
    return (contador / tableData.length) * 100;
  };

  const [porcentaje, setPorcentaje]= useState(() => porcentajeInterferencia(tableData));

  useEffect(() => {
    setCantDatos(tableData.length);
    setPorcentaje(porcentajeInterferencia(tableData));
  }, [tableData]);

  const renderCont = () => {
    if (tableData.length === 0) {
      return <Text style={styles.noDataText}>Para mostrar el informe, genere el informe con la tabla de datos desde la pestaña de Resultados.</Text>;
    }

    else {
      const alpha = (100 - nivelSeguridad) / 100; // Calcula alpha basado en el nivel de seguridad
      const error = (alpha.toFixed(2)*(Math.sqrt(porcentaje*(100-porcentaje))/valorDif));// Calcula Estimacion del error
      const cantSimu =(error*error);//calcula la cantidad de simualciones requeridas
      return (
        <View>
        <Text style={styles.subtitle}>a) Utilizando la {distribucion} de un total de {cantDatos} simulaciones se encontro que a probabilidad de que haya interferencia es de {porcentaje}%:</Text>

      <Text style={styles.subtitle}>b) Tomando en cuenta el resultado del inciso A, tenemos que el porcentaje de interferencia es de {porcentaje}</Text>
      <Text style={styles.subtitle}> Además, considerando que {(100 - porcentaje)} es el porcentaje restante y si el nivel de seguridad es del{' '}
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={nivelSeguridad}
              onChangeText={(text) => setNivelSeguridad(text)}
            />%
             entonces α = {alpha.toFixed(2)} por lo tanto Zα/2= {alpha.toFixed(2)/2}</Text> 
             <Text style={styles.subtitle}>Buscando en la tabla  de distribucion normal Zα/2= {buscarZ(alpha.toFixed(2)/2)}</Text> 
             <Text style={styles.subtitle}>Y teniendo el valor minimo  de diferencia es de:{' '}
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={valorDif}
              onChangeText={(text) => setValorDif(text)}
            /></Text> 
      <Text style={styles.subtitle}>Usando la formula de la estimacion del error se tiene: {error.toFixed(5)}</Text> 
      <Text style={styles.subtitle}>Por lo tanto el numero de simualciones a realizar si se quiere que la probabilidad de interferencia estimada difiera de su valor verdadero en menos de {valorDif}, con un nivel de seguridad del {nivelSeguridad}% es el de: {cantSimu.toFixed(1)} veces</Text></View>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>Informe de Simulación</Text>
           
      {renderCont()}

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
    justifyContent: 'top',
  },
  image: {
    width: 400,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    paddingBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
    color: 'gray',
  },
  input: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    width: 30,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});
