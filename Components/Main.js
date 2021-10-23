import * as React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Button from './Button.js'
import axios from 'axios'
import * as DB from './settings.json'

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            username: '',
        }
    }

    setPassword = (password) => this.setState({password})
    setUsername = (username) => this.setState({username})

    sendUser = async () => {
        let {password, username} = this.state
        password = password.split(' ').join('')
        username = username.split(' ').join('')
        const isSomethingEmpty = username === '' || password === ''

        if (!isSomethingEmpty) {
            try {
                const response = await axios.post(`${DB.API_URL}/user`, {password, username})
                this.props.navigation.navigate('Users')
            } catch (e) {
                console.log(e)
            }
        }
    }

    render() {

        return (
            <View>
                <View>
                    <Text style={styles.label}>User login</Text>
                    <TextInput
                        onChangeText={this.setUsername}
                        style={styles.text}
                        placeholder="name"
                    />
                </View>
                <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput

                        onChangeText={this.setPassword}
                        style={styles.text}
                        placeholder="pass"
                    />
                </View>
                <Button text='Register' press={() => this.sendUser()}/>
            </View>

        )
    }

}
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({


    label: {
        textTransform: 'UpperCase',
        fontWeight: "bold",
        fontSize: height * 0.02,
        margin: '10px'
    },
    text: {
        color: '#303F9F',
        fontSize: height * 0.025,
        margin: '10px'

    }

})
