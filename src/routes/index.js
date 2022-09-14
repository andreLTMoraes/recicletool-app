import React, { useContext } from 'react'

import { AuthContext } from '../contexts/Authentication'
import OutArea from './outArea'
import Home from '../pages/home'

export default function Routes() {
    const { user } = useContext(AuthContext)
    return (!!user ? <Home/> : <OutArea/>)
}