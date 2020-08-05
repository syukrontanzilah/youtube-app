import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList  } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header, Card, LitleCard } from '../component';
import Constant from 'expo-constants'
import{useSelector, useDispatch} from 'react-redux'


const Home = ({navigation}) => {
    const cardData = useSelector(state =>{
        return state
    })
    return (
        <View style={styles.page}>
            <StatusBar />
            <Header />
            <ScrollView
            showsVerticalScrollIndicator={false}>

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

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // backgroundColor:'wheat',
        marginTop: Constant.statusBarHeight
    }
})
