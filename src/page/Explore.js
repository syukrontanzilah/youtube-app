import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';

const Explore = () => {
    return (
        <View style={styles.page}>
            <StatusBar/>
            <Text>Explore screen</Text>
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    page:{
        flex:1,
        marginTop: Constant.statusBarHeight,

    }
})
