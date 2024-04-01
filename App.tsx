// import { init } from 'rn-okto-sdk';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';

// init(process.env.EXPO_PUBLIC_CLIENT_API_KEY!)
import { HuddleProvider, HuddleClient } from '@huddle01/react';
 
const huddleClient = new HuddleClient({
  projectId: "nsO6exAqrOQ0b8to8kHW9Ap1rIdaSpdo",
  options: {
    activeSpeakers: {
      size: 8,
    },
  },
});

export default function App() {
  return (
    <HuddleProvider key="huddle01-provider" client={huddleClient}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </HuddleProvider>
  );
}
