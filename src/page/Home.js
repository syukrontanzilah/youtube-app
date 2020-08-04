import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header, Card, LitleCard } from '../component';


const Home = () => {
    return (
        <View>
            <Text>home</Text>
            <StatusBar />
            <Header />
            <Card />
            <LitleCard />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
