import { useKeepAwake } from 'expo-keep-awake'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'
import SoundControls from './SoundControls'
import Soundlist from './SoundList'
import { Container } from './styles'

export default function App() {
  useKeepAwake()
  return (
    <Container>
      <StatusBar style='light' />
      <Soundlist />
      <SoundControls />
    </Container>
  )
}
