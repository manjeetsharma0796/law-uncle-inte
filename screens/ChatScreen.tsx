import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

// Import Gemini AI library
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyCDqAf-nnoCxt7UR6_QNHXeKXPBfTttJPc";
const MODEL_NAME = "gemini-1.0-pro";

const genAI = new GoogleGenerativeAI(API_KEY);

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleSend = async () => {
        try {
            const model = genAI.getGenerativeModel({ model: MODEL_NAME });
            const result = await model.generateContent(`You are an Indian lawyer, respond to the question by giving legal advice, writing article numbers and suggesting similar case laws:${input} Instructions for AI:
- Assess the clarity of the scenario(check if there is any relevent scenario or issue provided where a person would require legal awarness or advice).
- If the clarity is low, respond with a statement that the scenario is unclear and ask for more information.
- If the scenario is clear, provide legal advice, relevant laws, verdicts, and clickable links to similar cases.`);
            const response = await result.response;
            const text = await response.text();
            setMessages(prevMessages => [...prevMessages, input, text]);
            setInput('');
        } catch (error) {
            console.error("Error:", error);
            // Handle error
        }
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Chat Screen</Text>
                <TouchableOpacity onPress={handleClearChat}>
                    <Text style={styles.clearButtonText}>Clear Chat</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled"
            >
                {messages.map((message, index) => (
                    <Text key={index} style={index % 2 === 0 ? styles.sentMessage : styles.receivedMessage}>{message}</Text>
                ))}
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={Platform.select({ ios: 0, android: 0 })}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                        placeholder="Type your message..."
                        onSubmitEditing={handleSend}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#3333FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    clearButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    sentMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#DCF8C6',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        color: '#000000', // Adjusted text color for better visibility
    },
    receivedMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5E5EA',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        color: '#000000', // Adjusted text color for better visibility
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        color: '#000000', // Adjusted text color for better visibility
    },
    sendButton: {
        backgroundColor: '#3333FF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginLeft: 10,
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default ChatScreen;
