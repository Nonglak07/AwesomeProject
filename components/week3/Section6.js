import React from 'react';
import { Text, View, Image } from 'react-native';

export default function Section6() {
    
    return (
        <View style={{ paddingLeft: 10, }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 20 }}>Location</Text>
                <Text style={{ color: '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et....</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row", borderBottomWidth: 1 / 2, paddingBottom: 10 }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>
    );
}
