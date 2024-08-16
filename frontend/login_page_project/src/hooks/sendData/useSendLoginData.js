
import {apliClient} from './../../axios/apiClient';

export default function useSendLoginData() {

    function sendLogin(email, password) {

        apliClient.post('/login', {
            email: email,
            password: password
        })
        .then(response => {
            console.log("User data sended sucessfully:", response.data);
            return response;
        })
        .catch(error => {
            console.log(email + "  " + password)
            console.log("There was a error sending user data:", error);
        })
    };

    return  {sendLogin};
}