import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cta from '../pages/cta'
import Choice from '../pages/choice'

const Stack = createNativeStackNavigator()

export default function OutArea() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='cta' component={Cta}/>
            <Stack.Screen name='choice' component={Choice}/>
        </Stack.Navigator>
    )
}