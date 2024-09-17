import { useContext } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { RandomNumberContext } from "./context/RandomNumberContext";

export default function ContextChallenge() {
  const { addNumber, num } = useContext(RandomNumberContext);
  return (
    <View>
      <Text style={styles.heading}>ContextChallenge</Text>
      <View style={styles.container}>
        <FlatList
          data={num}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => addNumber(Math.round(Math.random() * 1000))}
      >
        <Text style={styles.whiteText}>Add Random Number</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    padding: 15,
    marginVertical: 10,
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 15,
    borderRadius: 5,
    width: "80%",
    marginHorizontal: "auto",
  },
  whiteText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
