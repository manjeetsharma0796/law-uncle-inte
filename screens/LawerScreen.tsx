import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import {request} from 'react-native-permissions'; // this one needs to be solve PERMISSION FOR CAMERA
import {useRoom} from '@huddle01/react/dist/hooks';
const API_KEY = '6WQbUdXGC6S_Of29NwuYSI7OfC0foFrw';
//=============================================
const LawerScreen = () => {
  const [input, setInput] = useState<string>('');
  const [roomId, setRoom] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const {joinRoom} = useRoom({
    onJoin: () => {
      console.log('Joined room');
    },
  });

  const createRoom = async () => {
    try {
      const response = await fetch(
        'https://api.huddle01.com/api/v1/create-room',
        {
          method: 'POST',
          body: JSON.stringify({
            title: 'Huddle01-Test',
            hostWallets: ['0x29f54719E88332e70550cf8737293436E9d7b10b'],
          }),
          headers: {
            'Content-type': 'application/json',
            'x-api-key': API_KEY, // Replace {{API_KEY}} with your actual API key
          },
        },
      );

      const d1 = await response.json();
      console.log(d1.data.roomId);

      setRoom(d1.data.roomId);
      console.log('RRRMMMM', roomId);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const joinToRoom = async () => {
    try {
      const response = await fetch(
        'https://api.huddle01.com/api/v1/join-room-token',
        {
          method: 'POST',
          body: JSON.stringify({
            roomId: 'xqa-nlwn-qwp',
            userType: 'guest',
            displayName: 'jishu',
          }),
          headers: {
            'Content-type': 'application/json',
            'x-api-key': API_KEY, // Replace {{API_KEY}} with your actual API key
          },
        },
      );

      const data = await response.json();
      setToken(data.token);
      console.log('000000', data.token); // Log the response data for debugging
      return data; // Return the response data if needed
    } catch (error) {
      console.error('Error:', error);
      return null; // Return null or handle the error as needed
    }
  };

  const handleJoinMeeting = () => {
    Alert.alert('Feature Under Development');
  };

  const handleEnableCameraForMeeting = async () => {
    try {
      const permissionStatus = await request('android.permission.CAMERA');
      console.log(permissionStatus, '---------------'); //////////////////
      if (permissionStatus === 'granted') {
        // Proceed with enabling the camera for the meeting
        console.log(
          'Camera permission granted. Enabling camera for meeting...',
        );
      } else {
        // Handle case where permission is denied
        console.log('Camera permission denied.');
        Alert.alert(
          'Camera Permission Required',
          'Please enable camera permission to use this feature.',
        );
      }
    } catch (error) {
      console.error('Failed to request camera permission:', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* Video Display */}
      <View style={styles.videoDisplay}>
        {/* Placeholder for video display */}
        <Text style={styles.videoText}>{roomId}</Text>
      </View>
      {/* Control Buttons */}
      <View style={styles.controlButtons}>
        {/* Circular buttons */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            joinRoom({
              roomId,
              token,
            });
          }}>
          <Text style={styles.buttonText}>M</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            createRoom();
          }}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => {
            joinToRoom();
            console.log('INSIDE JOIN++++++++++++++++++++');
          }}>
          <Text style={styles.buttonText}>J</Text>
        </TouchableOpacity>
      </View>
      {/* Button to Join Meeting */}
      <View>
        <TextInput
          style={styles.input}
          value={input}
          placeholder="Enter meeting code"
          placeholderTextColor="#999"
          onChangeText={setInput}></TextInput>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={handleEnableCameraForMeeting}>
          <Text style={styles.buttonText}>Join Meeting Room</Text>
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
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

console.log(
  '=======================================================================================',
);

export default LawerScreen;
