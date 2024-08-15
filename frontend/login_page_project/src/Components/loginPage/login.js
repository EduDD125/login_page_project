import { useState } from "react";
import useSendLoginData from "../../hooks/sendData/useSendLoginData";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log("inicio")
    function HandleSubmition(event) {
        event.preventDefault();

        if (email && password) useSendLoginData(email,password)
        else console.log("campos vazios")
    }

    return(
        <div className="App">
            <header className="App-header">
                <div className="login-form-wrap">
                    <h2>Login</h2>
                    <form className="login-form">
                        <input type="email" name="email" placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="password" name="password" placeholder="Digite sua senha"
                        onChange={(e) => {setPassword(e.target.value)}} required></input>
                        <button type="submit" className="btn-login"
                        onClick={(e) => HandleSubmition(e)} >Enviar</button>
                    </form>
                </div>
            </header>
        </div>
    );
}