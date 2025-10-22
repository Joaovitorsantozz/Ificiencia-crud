import Logo from "../assets/logo2.png"
function LoginPage() {
  return (
    <section className="login-sec">
      <div className="login-container">
        <img className="login-logo" src={Logo}></img>
        <h2>Organize, acompanhe e cuide — tudo em um só lugar</h2>

        <form>
          <div>
            <label>Email do usuário:</label>
            <input type="text" placeholder="Insira seu email"></input>
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" placeholder="Insira sua senha"></input>
          </div>
          <a className="login-btn" href="/home">Fazer Login</a>
        </form>
      </div>
    </section>
  );
}

export default LoginPage;
