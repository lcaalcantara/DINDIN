import "./style.css";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="container-signin">
      <img src={Logo} alt="logo" className="logo" />

      <div className="content-signin">
        <div className="left">
          <h1>
            Controle suas <span>finanças</span>, sem planilha chata.
          </h1>

          <h3>
            Organizar suas finanças nunca foi tão fácil, com o DINDIN, você tem
            tudo num único lugar e em um clique de distância
          </h3>

          <button
            className="btn-purple btn-big"
            onClick={() => navigate("sign-up")}
          >
            Cadastre-se
          </button>
        </div>
        <div className="right">
          <form>
            <h2>Login</h2>

            <div className="container-inputs">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>

            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" />
            </div>

            <button className="btn-purple btn-big">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
