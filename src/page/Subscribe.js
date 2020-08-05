import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';

const Subscribe = () => {
    return (
        <View style={styles.page}>
            <StatusBar/>
            <Text>subscribe</Text>
        </View>
    )
}

export default Subscribe

const styles = StyleSheet.create({
    page:{
        flex:1,
        marginTop: Constant.statusBarHeight,

    }
})
