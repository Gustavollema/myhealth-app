import React from "react";
import { View, Text } from "react-native";
import Style from './Style';

export default function Title(){
    return (
        <View style={Style.boxTitle}>
            <Text style={Style.textTitle}>MY HEALTH</Text>
        </View>
    )
}