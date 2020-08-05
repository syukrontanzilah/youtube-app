import React from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import { useNavigation,} from '@react-navigation/native'
import { Entypo, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'

const Header = ({ }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.wrapLogo}>
                <Entypo name="youtube" size={28} color="red" />
                <Text style={styles.text}>YouTube</Text>
            </View>
            <View style={styles.wrapIcon}>
                <Ionicons
                    onPress={() => alert('hi')}
                    name="md-videocam" size={26} color={colors.black1} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Search")}>
                    <Ionicons
                        name="md-search" size={26} color={colors.black1} />
                </TouchableOpacity>

                <MaterialIcons name="account-circle" size={26} color={colors.black1} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: 45,
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        flexDirection: 'row',
        elevation: 3
        // marginTop: Constant.statusBarHeight
    },
    wrapLogo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        // color: colors.white,
        fontSize: 22,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    wrapIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%',
        justifyContent: 'space-between'

    }
})
