import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header, Card, LitleCard } from '../component';
import Constant from 'expo-constants'


const Home = () => {
    return (
        <View style={styles.page}>
            <StatusBar />
            <Header />
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

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
