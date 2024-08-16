import { apliClient } from "../../axios/apiClient";

export default function useSendRegitrationData() {

    function sendRegitration(name, email, password) {

        apliClient.post('/create', {
            name: name,
            email: email,
            password: password
        })
        .then(response => {
            console.log("User data sended sucessfully:",response);
            return response;
        })
        .catch(error =>{
            console.log(name + " " + email + " " + password);
            console.log("There was a error sending user data:", error.response);
            throw error;
        })
    }

    return {sendRegitration};
}