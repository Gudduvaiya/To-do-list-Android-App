import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

// import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [inputGoal, setinputGoal] = useState("");
  const [outputGoal, setoutputGoal] = useState([]);
  const Onpress = () => {
    setoutputGoal((Currentgoal) => [...Currentgoal,{id: Math.random().toString(), value: inputGoal}]);
  };
  return (
    <View style={style.root}>
      <View style={style.wholeInputcontainer}>
        <TextInput
          placeholder="Enter the Text"
          style={style.textInput}
          onChangeText={(enteredtext) => {
            setinputGoal(enteredtext);
          }}
          value={inputGoal}
        />
        <Button
          title="Submit"
          onPress={Onpress}
        />
      </View>
      {/* We can use mapping from outputGoal but using FlatList instead of ScrollView is more efficient */}
      <FlatList
      keyExtractor={(item,index)=>item.id}
        data={outputGoal}
        renderItem={(listitems) => (
          <View style={style.listView}>
            <Text style={{ color: "green", fontWeight: "bold" }}>
              {listitems.item.value}
            </Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const style = StyleSheet.create({
  //StyleSheet is a class of react-native, we can always use inline styleing
  root: {
    marginTop: 100,
  },
  listView: {
    width: 300,
    padding: 15,
    marginTop: 15,
    marginLeft: 30,
    backgroundColor: "#a8f0bb",
    borderWidth: 4,
    borderColor: "green",
    borderRadius: 15,
  },
  wholeInputcontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomColor: "blue",
    borderBottomWidth: 4,
    marginBottom: 10,
    width: 300,
  },
});
