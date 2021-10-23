import React, {Component} from 'react';

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import profilePicture from "../assets/profilePicture.png";

class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props.route.params
        console.log(user.password)

        return (
            <View style={styles.container}>
                <View style={{
                    display: 'flex',
                    width: '30%',
                    height: '20%',
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <Image style={styles.image} resizeMode="cover" source={profilePicture}/>
                </View>
                <Text style={styles.informations}>Login: {user.username}</Text>
                <Text style={styles.informations}>Password: {user.password}</Text>
                <Text style={styles.informations}>Registered: {user.date}</Text>
            </View>
        );
    }
}

const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    informations: {
        color: '#303F9F',
        fontSize: height * 0.03
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})

export default Details;
