import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native-web";

function InputItems(props) {
  const [inputGoal, setinputGoal] = useState("");
  return (
    <View style={style.wholeInputcontainer}>
      <TextInput
        placeholder="Enter the Text"
        style={style.textInput}
        onChangeText={(enteredtext) => {
          setinputGoal(enteredtext);
        }}
        value={inputGoal}
      />
      <Button title="Submit" onPress={props.onpressprop.bind(this.inputGoal)} />
    </View>
  );
}
const style = StyleSheet.create({
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

export default InputItems;
