
import {apliClient} from './../../axios/apiClient';

export default function useSendLoginData() {

    function sendLogin(email, password) {

        apliClient.post('/login', {
            email: email,
            password: password
        })
        .then(response => {
            console.log("User data sended sucessfully:", response);
            return response;
        })
        .catch(error => {
            console.log("There was a error sending user data:", error);
            throw error;
        })
    };

    return  {sendLogin};
}