import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import { image1 } from '../assets/image'
import { useNavigation } from '@react-navigation/native'


const LitleCard = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Video Player",{
            videoId: props.videoId, title:props.title, channel:props.channel
        })}
        style={styles.container}>
            <View style={styles.wrapVideo}>
                <Image source={{uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style={styles.image} />
            </View>
            <View style={styles.wrapDesc}>
                <Text style={styles.title} numberOfLines={3}>{props.title}</Text>
                <Text style={styles.desc}>{props.channel}</Text>
                {/* <Text style={styles.desc}>2 Minggu yang lalu - 5rb x ditonton?</Text> */}
            </View>
        </TouchableOpacity>
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
