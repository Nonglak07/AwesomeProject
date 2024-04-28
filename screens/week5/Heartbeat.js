import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const [count, setCount] = useState(0);

    const Count = () => { setCount(count + 1); }

    return (
        <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity onPress={Count}>
                <FontAwesome name="heart" size={50} color="orange" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginTop: 20 }}>{count}</Text>
        </View>
    );
}
