import React, { createContext, useState, useContext } from 'react'
import { AlertContext } from './Alerts'
import { login, register } from '../utils/API'
import { checkObjValuesEmpty, validEmail, validPhone, validSsn } from '../utils/validations'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const { showLoading, hideLoading, openModal } = useContext(AlertContext)
    const [user, setUser] = useState(null)

    async function loginEmail(data) {
        var pass = true
        if(checkObjValuesEmpty(data)){ 
            openModal('Campo em branco', 'Preencha todos os campos para realizar o cadastro.')
            pass = false
        }
        

        if(pass) {
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
    }

    async function registerUser(data) {
        var pass = true
        if(checkObjValuesEmpty(data)){ 
            openModal('Campo em branco', 'Preencha todos os campos para realizar o cadastro.')
            pass = false
        }

        if(!data?.term) {
            openModal('Termo de condições', 'Aceite os termos de condições.')
            pass = false
        }

        if(!validEmail(data?.email)) {
            openModal('Email inválido', 'Verifique se email está correto.')
            pass = false
        }

        if(!validPhone(data?.phone)) {
            openModal('Celular inválido', 'Verifique se número está está no formato (99)99999-9999.')
            pass = false
        }

        if(!validSsn(data?.ssn)) {
            openModal('CPF inválido', 'Verifique se número do CPF está correto.')
            pass = false
        }

        if(pass) {
            showLoading()

            await register(data)
            .then(res => {
                if(data?.save) {
                    // LocalStorage
                }
                setUser(res)
            })

            hideLoading()
        }
    }

    return(
        <AuthContext.Provider
            value={{
                user,
                loginEmail,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider