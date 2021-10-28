import React from 'react'
import profilePicture from '../assets/profilePicture.png'
import {Image, StyleSheet, Text, View} from 'react-native'
import Button from './Button.js'

const ListItem = ({id, username, deleteUser, getDetails}) => (
    <View style={styles.column}>
        <View style={styles.cell}><Image style={styles.image} resizeMode="cover"
                                         source={profilePicture}/></View>
        <View style={styles.cell}><Text style={{fontWeight: 'Bold'}}>{id} - {username}</Text></View>
        <View style={styles.cell}><Button text='Delete' press={() => deleteUser(id)}/></View>
        <View style={styles.cell}><Button text='Details' press={() => getDetails(id)}/></View>
    </View>
)

const styles = StyleSheet.create({
    column: {
        width: '95%',
        height: 70,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
        resizeMode: 'cover',
    }
})
export default ListItem
