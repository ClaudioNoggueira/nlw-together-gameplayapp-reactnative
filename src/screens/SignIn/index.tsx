import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { style } from "./styles";

export function SignIn() {
    const [text, setText] = useState('');

    return (
        <View style={style.container}>
            <Text>Hello World, NLW Together!</Text>
            <TextInput style={style.input} onChangeText={setText} />
            <Text>Você digitou: {text}</Text>
        </View>
    );
}