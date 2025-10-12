function LoginPage() {
  return (
    <section className="login-sec">
      <div className="login-container">
        <h1>Logo Teste</h1>
        <h2>(Slogan logo teste possivel lorem ipsum)</h2>

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
