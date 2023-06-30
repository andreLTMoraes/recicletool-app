import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cta from '../pages/cta'
import Choice from '../pages/choice'
import Login from '../pages/login'
import Register from '../pages/register'
import Rules from '../pages/rules'

import { COLORS } from '../utils/AppStyles'

const Stack = createNativeStackNavigator()

export default function OutArea() {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='cta' component={Cta}/>
            <Stack.Screen name='choice' component={Choice}/>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='out-rules' component={Rules}/>
        </Stack.Navigator>
    )
}