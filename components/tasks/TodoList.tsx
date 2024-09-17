import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
interface Todo {
  id: string;
  text: string;
}
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const todoHandler = () => {
    if (todo.trim().length === 0) {
      alert("Please enter something");
      return;
    }
    setTodoList((prev) => [
      ...prev,
      { id: "" + Math.random() * 1000, text: todo },
    ]);
    setTodo("");
  };
  const removeTodoHandler = (id: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TodoList</Text>
      <View style={styles.top}>
        <TextInput
          placeholder="Enter Todo"
          value={todo}
          onChangeText={(text) => setTodo(text)}
          style={styles.input}
          onSubmitEditing={todoHandler}
          returnKeyType="done"
        />
        <Button title="Add Todo" color={"skyblue"} onPress={todoHandler} />
      </View>
      {/* <ScrollView>
        <View style={styles.todoContainer}>
          {todoList.length === 0 && (
            <Text style={styles.smallText}>No todos yet.</Text>
          )}
          {todoList.length > 0 &&
            todoList.map((todo) => (
              <Pressable
                key={todo.id}
                onLongPress={() => removeTodoHandler(todo.id)}
                style={styles.todo}
              >
                <Text style={styles.todoText}>{todo.text}</Text>
              </Pressable>
            ))}
        </View>
      </ScrollView> */}
      <View style={styles.todoContainer}>
        {todoList.length === 0 && (
          <Text style={styles.smallText}>No todos yet.</Text>
        )}
        {todoList.length > 0 && (
          <FlatList
            data={todoList}
            keyExtractor={(todo) => todo.id}
            renderItem={({ item: todo }) => {
              return (
                <Pressable
                  onLongPress={() => removeTodoHandler(todo.id)}
                  style={styles.todo}
                >
                  <Text style={styles.todoText}>{todo.text}</Text>
                </Pressable>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};
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

export default TodoList;
