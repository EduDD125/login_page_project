import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log("inicio")
    function handleSubmition(event) {
        event.preventDefault();

        if (email && password)
            console.log(email + " | " + password);
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
                        onClick={(e) => handleSubmition(e)} >Enviar</button>
                    </form>
                </div>
            </header>
        </div>
    );
}