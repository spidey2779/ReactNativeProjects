import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ToggleButton = ({ setHandler }: { setHandler: () => void }) => {
  return (
    <View>
      <Button title="Toggle" color={"crimson"} onPress={setHandler}
      
      />
    </View>
  );
};

export default ToggleButton;

const styles = StyleSheet.create({
    button:{
        paddingVertical:10,
        paddingHorizontal:15
    }
});
