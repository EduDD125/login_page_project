export default function Login() {
    return(
        <div className="App">
            <header className="App-header">
                <div className="login-form-wrap">
                    <h2>Login</h2>
                    <form className="login-form">
                        <input type="email" name="email" placeholder="Digite seu email" required></input>
                        <input type="password" name="password" placeholder="Digite sua senha" required></input>
                        <button type="submit" className="btn-login" >Enviar</button>
                    </form>
                </div>
            </header>
        </div>
    );
}