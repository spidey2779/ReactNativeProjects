import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const Com = () => {
  const list = [
    { id: 1, name: "spidey" },
    { id: 2, name: "hulk" },
    { id: 3, name: "ironman" },
  ];
  return (
    <View style={styles.mystyle}>
      <FlatList keyExtractor={(item) => item.id.toString()} data={list}
      renderItem={({item})=> <Text>{item.name}</Text>}
      
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mystyle: {
    width: "90%",
    padding: 10,
    borderRadius: 5,
  },
});

export default Com;
