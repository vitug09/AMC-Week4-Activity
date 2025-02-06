import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA1 = [
  { id: '1', title: 'Wake Up' },
  { id: '2', title: 'Looks on Date Calendar' },
  { id: '3', title: 'Brush' },
  { id: '47', title: 'Washing face' },
  { id: '5', title: 'Eating meal' },
  { id: '324324', title: 'Wash' },
  { id: '55435345', title: 'Read books' },
  { id: '55345345123123', title: 'Go outside' },
];

const DATA2 = [
  { id: '6', title: 'Eat lunch' },
  { id: '73', title: 'Play games' },
  { id: '8', title: 'Check Schedules' },
  { id: '9', title: 'Wash body' },
  { id: '10', title: 'MINIster' },
  { id: '56', title: 'Play games' },
  { id: '3123123125', title: 'Go outside' },
  { id: '512312312312', title: 'Read books' },
  { id: '5123123123123', title: 'Go to Class' },
  { id: '53123123123123', title: 'Sleep' },
];

const DATA3 = [
  { id: '11', title: 'Go home' },
  { id: '12', title: 'Eat dinner' },
  { id: '13', title: 'Rest' },
  { id: '147', title: 'Exercise' },
  { id: '15', title: 'Going outside' },
  { id: '18123', title: 'Go to 711' },
  { id: '5312312543465', title: 'Robbery' },
];

type ItemProps = { title: string; onPress?: () => void };

const Item = ({ title, onPress }: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.day}>Morning</Text>
      <FlatList
        data={DATA1}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.day}>Afternoon</Text>
      <FlatList
        data={DATA2}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.day}>Evening</Text>
      <FlatList
        data={DATA3}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  day: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default App;
