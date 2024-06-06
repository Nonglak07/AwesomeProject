import React from "react";
import { View } from "react-native";
import Bmi from "./Bmi";
import Heartbeat from "./Heartbeat";

export default function Health() {

    return (
        <View style={{ flex: 1 , backgroundColor : 'lightblue', justifyContent : "center", padding : 20 }}>
            <Bmi />
            <Heartbeat />
        </View>
    );
}
