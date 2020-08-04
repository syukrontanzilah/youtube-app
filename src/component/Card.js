import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { image1, image2 } from '../assets/image';
import { colors } from '../utils/colors';


const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapImage}>
                <Image source={{ uri: image1 }} style={styles.image} />
            </View>

            <View style={styles.wrapDesc}>
                <View>
                    <Image source={{ uri: image2 }} style={styles.youtuber} />
                </View>
                <View style={styles.wrapText}>
                    <Text numberOfLines={2} style={styles.title}>The Way Of Love - Maher Zain & Mustafa Ceceli</Text>
                    <Text numberOfLines={1} style={styles.desc}>Maher Zain  - 210jt x ditonton 5 bulan yang lalu</Text>
                </View>

            </View>

        </View>
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
