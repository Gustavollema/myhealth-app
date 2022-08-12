import React from "react";
import { View, Text } from "react-native";
import Style from './Style';

export default function ResultImc(props){
    return (
        <View style={Style.resultImc}>
            <Text style={Style.information}>{props.messageResultImc}</Text>
            <Text style={Style.numberImc}>{props.resultImc}</Text>
        </View>
    )
}