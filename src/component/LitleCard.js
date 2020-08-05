import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { colors } from '../utils/colors'
import { image1 } from '../assets/image'

const LitleCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapVideo}>
                <Image source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style={styles.image} />
            </View>
            <View style={styles.wrapDesc}>
                <Text style={styles.title} numberOfLines={3}>{props.title}</Text>
                <Text style={styles.desc}>{props.channel}</Text>
                {/* <Text style={styles.desc}>2 Minggu yang lalu - 5rb x ditonton?</Text> */}
            </View>
        </View>
    )
}

export default LitleCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom:18
    },
    wrapVideo: {
        width: '40%'
    },
    image: {
        // backgroundColor: 'wheat',
        height: 85,

    },
    wrapDesc: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        marginBottom: 3,
        maxWidth:'95%'
    },
    desc: {
        color: colors.gray2,
        fontSize: 12,
        marginBottom: -3,

    }
})
