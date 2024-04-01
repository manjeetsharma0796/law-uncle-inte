import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
            </View>
            <Text style={styles.heading}>Choose an option:</Text>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Chat')}
            >
                <Text style={styles.cardTitle}>Chat</Text>
                <Text style={styles.cardDescription}>
                    Start a conversation with others and discuss legal matters or ask questions related to law.
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('Lawer')}
            >
                <Text style={styles.cardTitle}>Lawyer</Text>
                <Text style={styles.cardDescription}>
                    Get legal advice from professional lawyers regarding your legal rights, issues, or cases.
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#4C7FFF',
        alignItems: 'center',
        marginBottom: 70 // Adjust the margin bottom as needed
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000000', // Adjust the color as needed
        textAlign: 'center',
    },
    cardContainer: {
        flex: 1, // Take up remaining vertical space
        justifyContent: 'center', // Center items vertically
        alignItems: 'center', // Center items horizontally
        paddingHorizontal: 20, // Add horizontal padding for cards
    },
    card: {
        width: '75%', // Take up full width
        aspectRatio: 1.5,
        backgroundColor: '#4C7FFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start', // Align text to the left
        paddingHorizontal: 20, // Add horizontal padding for text alignment
        marginBottom: 20,
        marginHorizontal: 40,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
    },
    cardDescription: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'left', // Align text to the left
    },
});



export default HomeScreen;
