import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const Button = ({ iconName, onPressOut }) => {
    return (
        <TouchableOpacity onPressOut={onPressOut}>
            <FontAwesome name={iconName} size={90} color={"#603c15"} />
        </TouchableOpacity>
    );    
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPressOut: PropTypes.func.isRequired
};



export default Button;