import React from 'react';
import { View, Text } from 'react-native';
import Header from './components/Header';
import Padrao, { Comp01, Comp02 } from './components/MultiComp';

export default () => (
  <View>
    <Text>{1+1}</Text>
    <Header/>
    <Padrao/>
    <Comp01/>
    <Comp02/>
    <Comp01/>
  </View>
)
