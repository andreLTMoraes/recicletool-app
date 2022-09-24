import React, { createContext, useState } from 'react'

import Loading from '../components/Loading'
import Modal from '../components/Modal'

export const AlertContext = createContext({})

function AlertProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        title: '',
        message: '',
        okFunction: () => setModal({...modal, visible: false}),
        visible: false
    })

    function showLoading() {
        setLoading(true)
        setTimeout(() => {
            (loading && setLoading(false))
        }, 4000)
    }

    function hideLoading() {
        setLoading(false)
    }

    function openModal(title, message) {
        setModal({
            ...modal,
            title,
            message,
            visible: true
        })
    }

    return(
        <AlertContext.Provider 
            value={{
                showLoading,
                hideLoading,
                openModal
            }}
        >
            {children}
            {loading && <Loading/>}
            {modal.visible && <Modal title={modal.title} message={modal.message} okFunction={modal.okFunction}/>}
        </AlertContext.Provider>
    )
}

export default AlertProvider