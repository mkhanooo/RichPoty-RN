import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import UserGallery from './UserGallery'
import UserSaved from './UserSaved'
import NewPost from '../../../components/NewPost'

export default function TabDetails({name,navigation}) {
    return (
        <View style={styles.mainBody}>
            {name === "Posts" && <NewPost navigation={navigation} />}
            {name === "Gallery" && <UserGallery navigation={navigation} />}
            {name === "Saved" && <UserSaved navigation={navigation} />}
        </View>
    )
}
const styles = StyleSheet.create({
    mainBody:{}
})