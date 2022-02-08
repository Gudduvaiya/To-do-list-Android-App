import React from 'react';
import { Text, View, StyleSheet} from 'react-native-web'

const Listitems=(props)=>{
    return(
        <View style={style.listView}><Text style={{color:"green", fontWeight:"bold"}}>{props.anything}</Text></View>
    );
}
const style=StyleSheet.create({
    listView:{
        width: 300,
        padding:15,
        marginTop:15,
        marginLeft:30,
        backgroundColor: "#a8f0bb",
        borderWidth: 4 ,
        borderColor:"green",
        borderRadius:15,
      },
})

export default Listitems