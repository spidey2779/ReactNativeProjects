import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import React, { useReducer, useState } from "react";
interface Todo {
  id: string;
  text: string;
}
type Action =
  | { type: "add"; payload: Todo }
  | { type: "delete"; payload: string };
interface State {
  todos: Todo[];
}
const initialState: State = { todos: [] };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return { todos: [...state.todos, action.payload] };
    case "delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
}
const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState<string>("");
  const addTodoHandler = () => {
    if (input.trim().length === 0) {
      alert("enter something to add");
      return;
    }
    dispatch({
      type: "add",
      payload: { id: Math.random().toString(), text: input },
    });
    setInput("");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List using Reducer</Text>
      <View style={styles.top}>
        <TextInput
          placeholder="Enter Todo"
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          onSubmitEditing={addTodoHandler}
          returnKeyType="done"
        />
        <Button title="add todo" color={"skyblue"} onPress={addTodoHandler} />
      </View>
      <View style={styles.todoContainer}>
        {state.todos.length === 0 && (
          <Text style={styles.smallText}>No Todos yet.</Text>
        )}
        {state.todos.length > 0 && (
          <FlatList
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                style={styles.todo}
                onPress={() => dispatch({ type: "delete", payload: item.id })}
              >
                <Text style={styles.todoText}>{item.text}</Text>
              </Pressable>
            )}
            data={state.todos}
          />
        )}
      </View>
    </View>
  );
};

export default ReducerHook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  top: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
  todoContainer: {
    marginTop: 15,
    gap: 10,
  },
  smallText: {
    textAlign: "center",
    fontSize: 17,
    marginTop: 20,
  },
  todo: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  todoText: {
    color: "white",
    fontSize: 17,
  },
});
