import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import {userService} from "../services/UserService";
import * as api from "../api/Sender";

const AuthLoading = ({ navigation }) => {
    const bootstrapAsync = async () => {
        let headers = {};
        const userInfo = await userService.get();
        if(userInfo) {
            headers = {
                'Authorization': `Bearer ${ userInfo.accessToken }`,
            };
            api.setHeader(headers);
            navigation.navigate('App');
        } else {
            navigation.navigate('Auth');
        }
    };

    bootstrapAsync();

    return (
        <View style={ styles.container }>
            <ActivityIndicator />
        </View>
    )
};

export default AuthLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
