import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { colors } from '../utils/colors';
import { LitleCard } from '../component';


const Search = () => {
    const [value, setValue] = useState("")
    const [litleCardData, setLitleCardData] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&key=AIzaSyAMeJczr2oAufSQoIbIlpe70BEzn2bKy8E`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                setLitleCardData(data.items)
            })
    }
    return (
        <View style={styles.page}>
            <StatusBar />
            {/* SEARCH BAR */}
            <View style={styles.wrapContent}>
                <Ionicons name="md-arrow-back" size={26} />
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <TouchableOpacity
                    onPress={() => fetchData()}
                    style={styles.wrapIcon}>
                    <Ionicons name="md-send" size={26} />
                </TouchableOpacity>
            </View>

            {/* CONTENT */}
            {
                loading ? <ActivityIndicator
                    style={{ marginTop: 20 }}
                    size="large" color="red" /> : null
            }

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.content}>
                <FlatList
                    data={litleCardData}
                    renderItem={({ item }) => {
                        return (
                            <LitleCard
                                videoId={item.id.videoId}
                                title={item.snippet.title}
                                channel={item.snippet.channelTitle}
                            />
                        )
                    }}
                    keyExtractor={item => item.id.videoId}
                />


            </ScrollView>


        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: Constant.statusBarHeight,
        paddingTop: 10
    },
    wrapContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 5,
        elevation: 3
    },
    input: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        fontSize: 16,
        paddingVertical: 4,
        marginHorizontal: 10,
        marginRight: 15,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    wrapIcon: {
    },
    content: {
        paddingHorizontal: 15,
        paddingTop: 15
    }
})


// GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=songs&type=video&key=[YOUR_API_KEY] HTTP/1.1

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=songs&type=video&key=AIzaSyAMeJczr2oAufSQoIbIlpe70BEzn2bKy8E

// AIzaSyAMeJczr2oAufSQoIbIlpe70BEzn2bKy8E