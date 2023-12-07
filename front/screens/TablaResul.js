import React from 'react'
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native'


  const tableData = [
    { id: 1, x1: 'x1 1', x2: 'x2 1', interseccion: "1" },
    { id: 2, x1: 'x1 2', x2: 'x2 2', interseccion: "0" },
    //  más datos 
  ];


export default function TablaResul() {
  return (
    <SafeAreaView>
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
      />
    </View>
    </SafeAreaView>
  )
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
});