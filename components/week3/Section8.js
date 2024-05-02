import React from 'react';
import { Text, View, Button, } from 'react-native';

export default function Section8() {

    return (
        // <View style={{ flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, padding: 5, flex: 1, }}>
        //     {/* View ก้อนที่ 1 */}
        //     <View style={{ flexDirection: "column", marginTop: 10 }}>
        //         <Text style={{ fontSize: 10 }}> Price</Text>
        //         <Text style={{ fontSize: 20, color: 'red' }} >$399.99</Text>
        //         <Text style={{ fontSize: 15 }}>AVG/Night</Text>

        //     </View>

        //     <View style={{flex: 1/3 ,borderRadius: 50, width: 100, height: 110 }} >
        //         <Button title="Book Now" color="#FF4500" />

        //     </View>
        // </View>

        <View style={{ paddingLeft: 10, flex: 1, }}>
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <Text>Price</Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>$399.99</Text>
                    <Text style={{ fontSize: 15 }}>AVG/Night</Text>
                </View>
                <View>
                    <Button title="Book Now" color="#FF4500" />
                </View>
            </View>
        </View>
    );
}
