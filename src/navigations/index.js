import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import AuthLoading from '../screens/AuthLoading';

const AppStack = createStackNavigator({
    Home,
}, {
    headerMode: 'none'
});
const AuthStack = createStackNavigator({
    SignIn,
}, {
    headerMode: 'none'
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
