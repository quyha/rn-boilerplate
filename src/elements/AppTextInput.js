import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { colors, fontSize } from "../config/Theme";

const AppTextInput = ({ style, ...props }) => (
    <TextInput
        { ...props }
        placeholderTextColor={ colors.blackLighter }
        style={ StyleSheet.flatten([ styles.base, style ]) }
    />
);

const styles = StyleSheet.create({
    base: {
        color: colors.black,
        fontSize: fontSize.base,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: colors.grayLighter,
        borderBottomWidth: 1,
        marginBottom: 15,
        marginTop: 10,
    }
});

export default AppTextInput;
