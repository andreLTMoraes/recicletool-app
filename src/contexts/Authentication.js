import React, { createContext, useState, useContext } from 'react'
import { AlertContext } from './Alerts'
import { login } from '../utils/API'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const { showLoading, hideLoading } = useContext(AlertContext)
    const [user, setUser] = useState(null)

    async function loginEmail(data) {
        showLoading()

        await login(data.useremail, data.password)
        .then(res => {
            if(data?.save) {
                // LocalStorage
            }
            setUser(res)
        })

        hideLoading()
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                loginEmail
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider