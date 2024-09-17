import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useReducer, useState } from "react";

interface Details {
  id: string;
  name: string;
  age: string;
}
interface State {
  profiles: Details[];
}
type Action =
  | { type: "add"; payload: Details }
  | { type: "delete"; payload: string }
  | { type: "edit"; payload: Details };
const initialState: State = {
  profiles: [],
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return { profiles: [...state.profiles, action.payload] };
    case "delete":
      return {
        profiles: state.profiles.filter((item) => item.id !== action.payload),
      };
    case "edit":
      return {
        profiles: state.profiles.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
const Profile = ({
  item,
  editHandler,
  deleteHandler,
}: {
  item: Details;
  editHandler: (item: Details) => void;
  deleteHandler: (id: string) => void;
}) => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.details}>
          {item.name} , {item.age} years old
        </Text>
      </View>
      <View style={styles.editContainer}>
        <Pressable onPress={() => editHandler(item)}>
          <Text style={styles.blueText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => deleteHandler(item.id)}>
          <Text style={styles.redText}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
};
const ReducerChallengeTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [editItem, setEditItem] = useState<Details | null>(null);
  const addProfileHandler = () => {
    if (!name.trim() || !age.trim()) {
      alert("please enter valid details");
      return;
    }
    if (editItem) {
      dispatch({
        type: "edit",
        payload: { id: editItem.id, name, age },
      });
      setEditItem(null);
      setName("");
      setAge("");
      return;
    }
    dispatch({
      type: "add",
      payload: { id: Math.random().toString(), name, age },
    });
    setName("");
    setAge("");
  };
  const editProfileHandler = (item: Details) => {
    setName(item.name);
    setAge(item.age);
    setEditItem(item);
  };
  const deleteProfileHandler = (id: string) => {
    dispatch({ type: "delete", payload: id });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Name"
          style={styles.input}
          returnKeyType="done"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          placeholder="Enter Age"
          style={styles.input}
          keyboardType="numeric"
          returnKeyType="done"
          onChangeText={(text) => setAge(text)}
          value={age}
        />
      </View>
      <Pressable style={styles.button} onPress={addProfileHandler}>
        <Text style={styles.buttonText}>
          {editItem ? "Update Profile" : "Add Profile"}
        </Text>
      </Pressable>
      <View>
        <FlatList
          data={state.profiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Profile
              item={item}
              editHandler={editProfileHandler}
              deleteHandler={deleteProfileHandler}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ReducerChallengeTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  inputContainer: {
    gap: 10,
    width: "80%",
    marginHorizontal: "auto",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
  },
  button: {
    backgroundColor: "black",
    width: "50%",
    marginHorizontal: "auto",
    padding: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  editContainer: {
    flexDirection: "row",
    gap: 20,
  },
  blueText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
  },
  redText: {
    color: "red",
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 18,
  },
});
