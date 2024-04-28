import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function MyIcon(props) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress } >
        <FontAwesome name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

