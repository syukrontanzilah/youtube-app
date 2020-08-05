import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview'
import { colors } from '../utils/colors';


const VideoPlayer = ({ route }) => {
    const { videoId, title, channel } = route.params
    return (
        <View style={styles.page}>
            <StatusBar />
            <View style={styles.video}>
                <WebView
                    javaScriptEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
                />
            </View>
            <View style={styles.wrapText}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text style={styles.channel}>{channel}</Text>
            </View>

        </View>
    )
}

export default VideoPlayer

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: Constant.statusBarHeight,

    },
    video: {
        width: '100%',
        height: 230
    },
    wrapText: {
        marginHorizontal: 15,
        marginTop: 10,
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    title: {
        fontSize: 16,
        maxWidth: '95%'

    },
    channel:{
        paddingTop:10,
        color:colors.gray2
    }
})
