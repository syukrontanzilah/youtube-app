import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { image1, image2 } from '../assets/image';
import { colors } from '../utils/colors';
import { useNavigation, } from '@react-navigation/native'



const Card = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Video Player",{
            videoId: props.videoId, title:props.title, channel:props.channel
        })}
        style={styles.container}>
            <View style={styles.wrapImage}>
                <Image source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} style={styles.image} />
            </View>
            <View style={styles.wrapDesc}>
                <View>
                    <Image source={{ uri: `https://i.ytimg.com/vi/${props.channelId}/default.jpg` }} style={styles.youtuber} />
                </View>
                <View style={styles.wrapText}>
                    <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                    <Text numberOfLines={1} style={styles.desc}>{props.channel}</Text>
                    {/* <Text numberOfLines={1} style={styles.desc}>{props.published}</Text> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        elevation: 2,
        marginBottom: 10
    },
    wrapImage: {
        width: '100%'
    },
    image: {
        height: 230,
        width: '100%'
    },
    wrapDesc: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    wrapText: {
        flex: 1,
        marginLeft:10
    },
    title: {
        fontSize: 15,
        // fontWeight:'500',
        maxWidth: '90%'
    },
    desc: {
        fontSize: 12,
        color: colors.gray2
    },
    youtuber: {
        height: 35,
        width: 35,
        borderRadius: 35/2
    }
})
