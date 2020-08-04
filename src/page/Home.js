import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Header, Card, LitleCard } from '../component';


const Home = () => {
    return (
        <View style={styles.page}>
            {/* <StatusBar /> */}
            <Header />
          
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor:'wheat'
    }
})
