import React from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fontSize, stylesBase } from '../config/Theme';
import AppText from '../elements/AppText';

const Button = props => {
    const {
        text,
        onPress,
        type,
        size,
        disabled,
        rounded,
    } = props;

    return (
        <TouchableOpacity
            style={ [
                styles.button,
                disabled && styles.disabled,
                rounded && styles.rounded,
                size && styles[ size ],
                styles[ type ],
            ] }
            onPress={ onPress }
            disabled={ disabled }
        >
            <AppText
                style={ [
                    styles.text,
                    styles[ 'text' + type ],
                    styles[ 'text' + size ],
                ] }
            >
                { text }
            </AppText>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
    },
    normal: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    small: {
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    disabled: {
        opacity: .6,
    },
    rounded: {
        borderRadius: 20,
    },
    primary: {
        backgroundColor: colors.green,
    },
    danger: {
        backgroundColor: colors.redLighter,
    },
    white: {
        backgroundColor: colors.white,
        ... stylesBase.shadow
    },
    text: {
        fontSize: fontSize.base,
        textAlign: 'center',
    },
    textprimary: {
        color: colors.white,
    },
    textdanger: {
        color: colors.white,
    },
    textsmall: {
        fontSize: fontSize.small,
    }
});
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    rounded: PropTypes.bool,
    size: PropTypes.string,
};
Button.defaultProps = {
    style: styles.primary,
    disabled: false,
    text: "BUTTON DEFAULT TEXT",
    size: 'normal',
};

export default Button;
