import React from "react";
import { View, } from "react-native";
import MyIcon from "./MyIcon";

export default function Section5() {
    return (
        <View style={{ padding: 5,}} >
            {/* View ก้อนที่ 1 */}
            <View style={{ flexDirection: "row", borderBottomWidth: 1 / 2, paddingBottom: 10 }}>
                <MyIcon title="wifi" name="wifi" size={30} color="#00838f" />
                <MyIcon title="coffee" name="coffee" size={30} color="#00838f" />
                <MyIcon title="bath" name="bath" size={30} color="#00838f" />
                <MyIcon title="car" name="car" size={30} color="#00838f" />
                <MyIcon title="paw" name="paw" size={30} color="#00838f" />
            </View>
        </View>
    );
}
