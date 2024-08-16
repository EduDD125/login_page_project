import { useState } from "react";
import useSendLoginData from "../../hooks/sendData/useSendLoginData";

export default function Login({selectedOption, setLoggedIn, setUserData}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {sendLogin} = useSendLoginData();

    function HandleSubmition(e) {
        e.preventDefault()
        const response = sendLogin(email,password);
        console.log(response);
        if (response.status == 200) {
            setLoggedIn(true);
            setUserData(response.config.data)
        };
    }

    return(
        <div className="App" hidden={selectedOption =='login' ? false : true}>
            <header className="App-header">
                <div className="form-wrap">
                    <h2>Login</h2>
                    <form className="form">
                        <input type="email" name="email" placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="password" name="password" placeholder="Digite sua senha"
                        onChange={(e) => {setPassword(e.target.value)}} required></input>
                        <button type="submit" className="btn-submitting"
                        onClick={(e) => HandleSubmition(e)} >Enviar</button>
                    </form>
                </div> 
            </header>
        </div>
    );
}