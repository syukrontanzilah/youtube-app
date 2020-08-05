import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';

const VideoPlayer = () => {
    return (
        <View style={styles.page}>
            <StatusBar/>
            <Text>VideoPlayer</Text>
        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    page:{
        flex:1,
        marginTop: Constant.statusBarHeight,

    }
})
