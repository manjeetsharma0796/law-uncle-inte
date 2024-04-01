import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/login';
import ChatScreen from './screens/ChatScreen';
import LawerScreen from './screens/LawerScreen';


export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Chat: undefined;
    Lawer: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>()
export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Lawer"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Lawer" component={LawerScreen} />
        </Stack.Navigator>
    )
}