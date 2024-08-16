import { useState } from "react";
import useSendRegitrationData from "../../hooks/sendData/useSendRegitrationData";

export default function Registration({selectedOption}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {sendRegitration} = useSendRegitrationData();

    function HandleSubmition(e) {
        e.preventDefault()
        console.log(name + " " + email  + " " + password);
        const response = sendRegitration(name,email,password);
        console.log("Response data of registration");
        console.log(response);
    }

    return(
        <div className="App" hidden={selectedOption =='registration' ? false : true}>
            <header className="App-header">
                <div className="form-wrap">
                    <h2>Cadastro</h2>
                    <form className="form">
                        <input type="name" name="name" placeholder="Digite seu nome..."
                        onChange={(e) => setName(e.target.value)} required></input>
                        <input type="email" name="email" placeholder="Digite seu email..."
                        onChange={(e) => setEmail(e.target.value)} required></input>
                        <input type="password" name="password" placeholder="Digite sua senha..."
                        onChange={(e) => {setPassword(e.target.value)}} required></input>
                        <button type="submit" className="btn-submitting"
                        onClick={(e) => HandleSubmition(e)} >Enviar</button>
                    </form>
                </div> 
            </header>
        </div>
    );
}