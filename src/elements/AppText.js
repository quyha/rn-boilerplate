import React from 'react'
import { Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../config/Theme";

const AppText = ({ style, children, ...props }) => (
    <Text
        { ...props }
        style={ StyleSheet.flatten([ styles.base, style ]) }
    >
        { children }
    </Text>
);
const styles = StyleSheet.create({
    base: {
        color: colors.black,
        fontSize: fontSize.base,
    }
});
export default AppText;
