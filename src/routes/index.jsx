import React, { useContext } from 'react'

import { AuthContext } from '../contexts/Authentication'
import OutArea from './outArea'
import InArea from './inArea'

export default function Routes() {
    const { user } = useContext(AuthContext)
    return (!!user ? <InArea/> : <OutArea/>)
}