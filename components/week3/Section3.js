import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section3() {
    return (
        <View style={{  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: '#FF4500', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "white", }}>9.5</Text>
            </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20, color : '#FF4500' }}>Excellent</Text>
                    <Text style={{ color: "gray" }}>See 801 reviews</Text>
                </View>
            </View>

        </View>    

        
    );
}
