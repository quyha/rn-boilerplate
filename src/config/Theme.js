import { Platform } from 'react-native';
import responsiveFont from './ResponsiveFont';

const colors = {
    primary: '#FF0074',
    white: '#ffffff',
    gray: '#FAFAFA',
    grayLighter: '#E7E7E7',
    grayDark: '#A4A4A4',
    green: '#1ED66C',
    black: '#1E272E',
    blackLighter: '#242628',
    redLighter: '#FF0074',
    red: '#ee1412',
};

const fontSize = {
    base: responsiveFont(16),
    small: responsiveFont(14),
    medium: responsiveFont(24),
    large: responsiveFont(28),
    larger: responsiveFont(32),
};

const stylesBase = {
    paddingContainer: 20,
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, 0.9)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 15,
            },
            android: {
                elevation: 1,
            }
        })
    },
};

export { colors, fontSize, stylesBase };
