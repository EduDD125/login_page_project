import { useEffect } from 'react';
import apliClient from './../../axios/apiClient';

export default function useFetchUserData({email, password}) {
    useEffect(() => {
        apliClient.get('/user/${id}')
        .then(response => {
            console.log("User data fetched sucessfully:", response.data);
            return response.data;
        })
        .catch(error => {
            console.log("There was a error sending user data:", error)
        });
    })
}