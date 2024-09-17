import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import React from "react";

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/image.png")} style={styles.image} />
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>Spidey</Text>
      <Text style={{ fontSize: 15 }}>My nam is spidey and i love coding</Text>
      <Button
        title="Press Me"
        color={"crimson"}
        onPress={() => alert("pressed")}
      />
      <Pressable
        style={styles.button}
        onPress={() => console.warn("pressed on pressable")}
      >
        <Text style={{ color: "white" }}>Press Me</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 0.45,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    width: "90%",
    padding: 50,
    borderRadius: 20,
    shadowColor: "#00000052", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 1.84, // Shadow radius
    elevation: 10,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
});
export default ImageComponent;
