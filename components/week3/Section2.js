import React from 'react';
import { Text, View, } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

export default function Section2() {
    
    return (
        <View style={{ flex: 1, padding: 10}}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, aspectRatio: 7 / 2, borderRadius: 10, backgroundColor: '#DCDCDC',marginTop: -45, }}  >
                    <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20 }}>Hilton San Francisco</Text>

                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star" size={20} color="orange" />
                            <FontAwesome name="star-half" size={20} color="orange" />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: 'gray' }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}
