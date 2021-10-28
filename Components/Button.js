import PropTypes from 'prop-types';
import React from 'react'
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.props.press()}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
const {height} = Dimensions.get('window')
const styles = StyleSheet.create({
    text: {
        fontSize: height * 0.025,
        margin: 10,
        fontWeight: 'bold',
    }
})
Button.propTypes = {
    text: PropTypes.string.isRequired,
    press: PropTypes.func.isRequired,
};

