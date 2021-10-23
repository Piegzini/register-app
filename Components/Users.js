import * as React from 'react';
import {FlatList, View} from 'react-native';
import axios from "axios";
import * as DB from './settings.json'
import ListItem from './ListItem.js'

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount = async () => {
        try {
            const {data} = await axios.get(`${DB.API_URL}/users`)
            this.setState({users: data})
        } catch (e) {
            console.log(e)
        }
    }
    deleteUser = async (id) => {
        let data;
        console.log(id)
        try {
            const response = await axios.delete(`${DB.API_URL}/user/${id}`)
            data = response.data
            console.log(data)
        } catch (e) {
            const {users} = this.state
            data = users
        } finally {
            this.setState({users: data})
        }
    }

    getDetails = async (id) => {
        let user;
        try {
            const {data} = await axios.get(`${DB.API_URL}/user/${id}`)
            console.log(data)
            this.props.navigation.navigate("Details", {user: data})

        } catch (e) {
            console.log(e)
        }
    }

    renderListItem = ({item}) => (
        <ListItem id={item.id} username={item.username} deleteUser={this.deleteUser}
                  getDetails={this.getDetails}/>
    );

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderListItem}
                    keyExtractor={({id}) => id.toString()}
                />
            </View>
        )
    }
}
