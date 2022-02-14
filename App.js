import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  Modal,
} from "react-native";

// import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [inputGoal, setinputGoal] = useState("");
  const [outputGoal, setoutputGoal] = useState([]);
  const [Modals, setModals] = useState(false);
  const Onpress = () => {
    setoutputGoal((Currentgoal) => [
      ...Currentgoal,
      { id: Math.random().toString(), value: inputGoal },
    ]);
    setModals(false);
    setinputGoal("");
  };

  const DeleteItem = (GoalId) => {
    // if GoalId matches with goal.id then it will be deleted
    setinputGoal((Currentgoals) => {
      return Currentgoals.filter((goal) => goal.id !== GoalId);
    });
  };
  return (
    <View style={style.root}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={style.ModalOnBtn}>
          <Button
            title="Add Note"
            onPress={() => {
              setModals(true);
            }}
            color="green"
            style={style.ModalOnBtn}
          />
        </View>
        <View style={style.ModalOnBtn}>
          <Button
            title="RESET"
            onPress={() => {
              setoutputGoal([]);
            }}
            color="red"
            style={style.ModalOnBtn}
          />
        </View>
      </View>
      <Modal visible={Modals} animationType="slide">
        <View style={style.wholeInputcontainer}>
          <TextInput
            placeholder="Enter the Text"
            style={style.textInput}
            onChangeText={(enteredtext) => {
              setinputGoal(enteredtext);
            }}
            value={inputGoal}
          />
          <View style={{ display: "flex", flexDirection: "row",  }}>
            <View style={{width:100}}>
              <Button title="Submit" onPress={Onpress} />
            </View>
            <View style={{width:100, marginLeft:13}}>
              <Button
                title="GO BACK"
                color="red"
                style={{ marginTop: 15 }}
                onPress={() => {
                  setModals(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* We can use mapping from outputGoal but using FlatList instead of ScrollView is more efficient */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={outputGoal}
        renderItem={(listitems) => (
          <TouchableNativeFeedback
            onDelete={DeleteItem.bind(this, listitems.item.id)}
          >
            <View style={style.listView}>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                {listitems.item.value}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const style = StyleSheet.create({
  //StyleSheet is a class of react-native, we can always use inline styleing
  root: {
    marginTop: 90,
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderBottomColor: "blue",
    borderBottomWidth: 4,
    marginBottom: 10,
    width: 300,
  },
  ModalOnBtn: {
    borderRadius: 15,
    width: 330,
    marginTop:10
  },
});
