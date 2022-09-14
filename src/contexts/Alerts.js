import React, { createContext, useState } from 'react'

import Loading from '../components/Loading'

export const AlertContext = createContext({})

function AlertProvider({children}) {
    const [loading, setLoading] = useState(false)

    function showLoading() {
        setLoading(true)
        setTimeout(() => {
            (loading && setLoading(false))
        }, 4000)
    }

    function hideLoading() {
        setLoading(false)
    }

    return(
        <AlertContext.Provider 
            value={{
                showLoading,
                hideLoading
            }}
        >
            {children}
            {loading && <Loading/>}
        </AlertContext.Provider>
    )
}

export default AlertProvider