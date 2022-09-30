import React from "react";
import { Text, TextInput, View } from "react-native";
import MainStyle from "../MainStyle.style";

export default function LoginScreen(){
    return (<>
        <View style={MainStyle.centerView}>
            <Text style={MainStyle.emphasisText}> Login </Text>
        </View>
        <View style={MainStyle.centerView}>
            <Text>Email:</Text>
            <TextInput style={{width:'90%',borderWidth:1, borderRadius:10, padding:10}} />
        </View>
        </>
    );
}