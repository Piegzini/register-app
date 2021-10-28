import * as React from 'react';
import {
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Button from './Button.js'
import axios from 'axios'
import * as DB from './settings.json'

const {height} = Dimensions.get('window')

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
                console.log(response)
                this.props.navigation.navigate('Users')
            } catch (e) {
                Alert.alert('Error', 'Invalid username')
            }
        }
    }

    render() {

        return (
            <KeyboardAvoidingView>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%'
                }}>
                    <View style={{
                        display: 'flex',
                        flex: 2,
                        marginTop: '10%',
                        flexDirection: 'row',
                        backgroundColor: '#303F9F',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            flex: 1,
                            margin: 10,
                            fontSize: height * 0.05,
                            fontWeight: 'bold',
                            color: '#fff'
                        }}>REGISTER APP</Text>
                    </View>
                    <View style={{flex: 3}}>
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

                </View>
            </KeyboardAvoidingView>


        )
    }

}
const styles = StyleSheet.create({


    label: {
        textTransform: 'uppercase',
        fontWeight: "bold",
        fontSize: height * 0.02,
        margin: 10,
    },
    text: {
        color: '#303F9F',
        fontSize: height * 0.025,
        margin: 10,

    }

})
