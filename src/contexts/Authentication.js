import React, { createContext, useState, useContext, useEffect } from 'react'
import { AlertContext } from './Alerts'
import { login, register } from '../utils/API'
import { checkObjValuesEmpty, validEmail, validPhone, validSsn } from '../utils/validations'
import { storeObject, getObject, clearContent } from '../utils/asyncStorage'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const { showLoading, hideLoading, openModal } = useContext(AlertContext)
    const [authToken, setAuthToken] = useState(null)

    const loginKey = "@login_credentials"

    useEffect(() => {
        autoLogin()
    }, []);


    const storeLoginCredentials = async (username, password) => {
        await storeObject(loginKey, { "username": username, "password": password });
    }
    
    const getStoredLoginCredentials = async () => await getObject(loginKey);

    const logOut = async () => {
        showLoading();
        await clearContent(loginKey);
        setAuthToken(null);
        hideLoading();
    }

    async function autoLogin() {
        showLoading();
        try {
            const storedCredentials = await getStoredLoginCredentials();
            console.log("stored credentials", JSON.stringify(storedCredentials))
            if (storedCredentials) {
                const res = await login(storedCredentials.username, storedCredentials.password);
                if (res?.statusCode == '200') {
                    console.log("Login automatico OK")
                    setAuthToken(res.authToken);
                } else {
                    console.log("Login automatico falhou")
                }
            }
        } catch (error) {
            console.log(error);
        }
        hideLoading();
    }


    async function loginEmail(data) {
        var pass = true
        if (checkObjValuesEmpty(data)) {
            openModal('Campo em branco', 'Preencha todos os campos para realizar o cadastro.')
            pass = false
        }

        if (pass) {
            showLoading()

            try {
                const res = await login(data.useremail, data.password);
                if (res?.statusCode == '200') {
                    console.log("Login successfull")
                    if (data?.save) {
                        // LocalStorage
                        await storeLoginCredentials(data.useremail, data.password);
                    }
                    setAuthToken(res.authToken);
                } else {
                    console.log("Login unsuccessfull")
                    openModal('Email ou senha não cadastrados', 'Confira seu email ou senha')
                }
            } catch (error) {
                console.error(error);
            }

            hideLoading()
        }
    }

    async function registerUser(data) {
        var pass = true
        if (checkObjValuesEmpty(data)) {
            openModal('Campo em branco', 'Preencha todos os campos para realizar o cadastro.')
            pass = false
        }

        if (!data?.term) {
            openModal('Termo de condições', 'Aceite os termos de condições.')
            pass = false
        }

        if (!validEmail(data?.email)) {
            openModal('Email inválido', 'Verifique se email está correto.')
            pass = false
        }

        if (!validPhone(data?.phone)) {
            openModal('Celular inválido', 'Verifique se número está está no formato (99)99999-9999.')
            pass = false
        }

        if (!validSsn(data?.ssn)) {
            openModal('CPF inválido', 'Verifique se número do CPF está correto.')
            pass = false
        }

        if (pass) {
            showLoading()

            await register(data)
                .then(res => {
                    if (data?.save) {
                        // LocalStorage
                    }
                    setAuthToken(res)
                })

            hideLoading()
        }
    }

    return (
        <AuthContext.Provider
            value={{
                authToken,
                loginEmail,
                registerUser,
                logOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider