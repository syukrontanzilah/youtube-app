import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native'
import Constant from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { colors } from '../utils/colors';
import { Header, Card } from '../component';
import{useSelector, useDispatch} from 'react-redux'



const LitleCard1 = ({ name }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const Explore = () => {
    const cardData = useSelector(state =>{
        return state
    })
    return (
        <View style={styles.page}>
            <StatusBar />
            <Header />
            <ScrollView
            showsVerticalScrollIndicator={false}>

            <View style={styles.wrapCard}>
                <LitleCard1 name="Gaaming" />
                <LitleCard1 name="Trending" />
                <LitleCard1 name="Music" />
                <LitleCard1 name="News" />
            </View>
            <Text style={styles.trending}>Trending Videos</Text>
            <FlatList
            data ={cardData}
            renderItem={({item})=>{
                return <Card
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                channelId={item.id.videoId}
                // published={item.snippet.publishedAt}
                />
            }}
            keyExtractor={item=> item.id.videoId}
            /> 
            </ScrollView>

        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: Constant.statusBarHeight,

    },
    wrapCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    card: {
        backgroundColor: 'red',
        width: '49.5%',
        height: 50,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    text: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 22,
    },
    trending: {
        padding: 10,
        fontSize: 20,
        paddingBottom:5,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    }
})
