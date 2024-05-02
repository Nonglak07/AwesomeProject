import React from 'react';
import { Text, View, } from 'react-native';

export default function Section4() {
    
    return (
        <View style={{ padding: 10 }} >
            <View style={{ borderTopWidth: 1 / 2, borderBottomWidth: 1 / 2 }}>
                {/* View ก้อนที่ 1 */}
                <View style={{ padding: 10, paddingLeft: 1, }} >
                    <Text style={{ fontSize: 20 }}>Hotel Description</Text>
                    <Text style={{ color: '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
                </View>
            </View>
        </View>
    );
}
