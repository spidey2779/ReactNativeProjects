import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

const ColorPicker = () => {
  const colors = ["red", "blue", "green", "yellow"];
  const [mycolor, setMycolor] = useState("red");
  return (
    <View style={{ ...styles.container, backgroundColor: mycolor }}>
      <Text style={styles.text}>Pick a Color</Text>
      {colors.map((color) => {
        return (
          <Pressable
            style={{
              ...styles.colors,
              backgroundColor: color,
            }}
            key={color}
            onPress={() => setMycolor(color)}
          ></Pressable>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  colors: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth:3,
    borderColor:'black',
  },
  text:{
    fontSize:20,
    fontWeight:"bold"
  }
});
export default ColorPicker;
