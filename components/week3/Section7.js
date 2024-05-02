import React from 'react';
import { Text, View, Image, } from 'react-native';

export default function Section7() {
    
    return (
        <View style={{ paddingLeft: 10, padding: 10, flex: 1, flexDirection: 'column', borderBottomWidth: 1 / 2, paddingBottom: 10 }} >
            {/* View ก้อนที่ 1 */}
            <View >
                <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection: "row", padding: 10, paddingLeft: 1, }} >
                <Image style={{ borderRadius: 10, width: 100, height: 110 }}
                    source={require("../../assets/week3/room-8.jpg")} />

                {/* View ก้อนที่ 3 */}
                <View style={{ flexDirection: "column", paddingLeft: 10}} >
                    <Text style={{ fontSize: 20,}} >Standard Twin Room</Text>
                    <Text style={{ fontSize: 20, color: 'red', marginTop: 25 }} >$399.99</Text>
                    <Text style={{ fontSize: 15, color: "#00838f", marginTop: 5 }} >Hurry Up! This is your last room!</Text>
                </View>
            </View>
        </View>
    );
}
