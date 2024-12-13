import { StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return <SafeAreaView className='flex-1 items-center justify-center bg-white'>
    <Text className='text-red-500'>My demom</Text>
    <StatusBar barStyle="default"/>
    </SafeAreaView>;
}
