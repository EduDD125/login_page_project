import { useEffect } from 'react';
import apliClient from './../../axios/apiClient';
import useFetchUserData from './../fetchData/useFetchUserData'

export default function useSendLoginData({email, password}) {
    useEffect(() => {
        apliClient.post('/login', {
            email: email,
            password: password
        })
        .then(response => {
            console.log("User data sended sucessfully:", response.data);
        })
        .catch(error => {
            console.log("There was a error sending user data:", error)
        });
    })
}