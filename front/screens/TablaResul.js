import React, {useState} from 'react'
import { ScrollView, View, FlatList, Text, StyleSheet,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function TablaResul({ route }) {
  const tableData = route?.params?.tableData || [];
  const distribucion = route?.params?.distribucion || "";
  const navigation = useNavigation();

  const renderCont = () => {
    if (tableData.length === 0) {
      return <Text style={styles.noDataText}>Para mostrar los datos, primero elija una distribución y complete los datos.</Text>;
    }

    else {
      return (
        <View style={styles.button}>
        <Button title="Generar Informe De Simulacion" color="#0F52BA" onPress={navegacionPantallas}/>
        </View>
        
      );
    }
  };
 
  const navegacionPantallas = async () => {
    try {
      navigation.navigate('Conclusiones', { tableData: tableData, distribucion:distribucion });
    } catch (error) {
      console.error("Error al generar datos:", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={tableData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.idContainer}>
                <Text style={styles.idText}>{item.id}</Text>
              </View>
              <Text style={styles.cell}>{item.x1}</Text>
              <Text style={styles.cell}>{item.x2}</Text>
              <Text style={styles.cell}>{item.interseccion}</Text>
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text style={styles.headerText}>N°</Text>
              <Text style={styles.headerText}>Valor de X1</Text>
              <Text style={styles.headerText}>Valor de X2</Text>
              <Text style={styles.headerText}>Interseccion</Text>
            </View>
          )}
          ListFooterComponent={renderCont}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  idContainer: {
    width: 30,
  },
  idText: {
    textAlign: 'center',
  },
  cell: {
    textAlign: 'center',
    paddingRight: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingBottom: 8,
    marginBottom: 8,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
    color: 'gray',
  },
  button: {
    paddingTop: 16, 
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