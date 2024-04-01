import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import { request } from 'react-native-permissions';

const LawerScreen = () => {
    let [input, setInput] = useState('');

  const handleJoinMeeting = () => {
    Alert.alert('Feature Under Development');
  };

    const handleEnableCameraForMeeting = async () => {
      try {
        const permissionStatus = await request('android.permission.CAMERA');
        console.log(permissionStatus,"---------------");                       //////////////////
        if (permissionStatus === 'granted') {
          // Proceed with enabling the camera for the meeting
          console.log('Camera permission granted. Enabling camera for meeting...');
        } else {
          // Handle case where permission is denied
          console.log('Camera permission denied.');
          Alert.alert('Camera Permission Required', 'Please enable camera permission to use this feature.');
        }
      } catch (error) {
        console.error('Failed to request camera permission:', error);
      }
    }
  return (
    <View style={styles.container}>
      {/* Video Display */}
      <View style={styles.videoDisplay}>
        {/* Placeholder for video display */}
        <Text style={styles.videoText}>Video Display</Text>
      </View>
      {/* Control Buttons */}
      <View style={styles.controlButtons}>
        {/* Circular buttons */}
        <TouchableOpacity style={styles.controlButton} onPress={() => {}}>
          <Text style={styles.buttonText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={() => {}}>
          <Text style={styles.buttonText}>S</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={() => {}}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      </View>
      {/* Button to Join Meeting */}
      <View>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="Enter meeting code"
          placeholderTextColor="#999"
          onChangeText={setInput}
          ></TextInput>
        <TouchableOpacity style={styles.joinButton} onPress={handleEnableCameraForMeeting}>
          <Text style={styles.buttonText}>Join Video Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  videoDisplay: {
    width: 250,
    height: 250,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  videoText: {
    fontSize: 18,
    color: '#000000',
  },
  controlButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  controlButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4C7FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  joinButton: {
    backgroundColor: '#4C7FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom:8,
    fontSize: 16,
    textAlign:"center",
    color: '#000000', 
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

console.log('=======================================================================================');

export default LawerScreen;
