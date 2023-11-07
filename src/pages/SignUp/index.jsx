import "./style.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container-signup">
      <img src={Logo} alt="logo" className="logo" />

      <div className="content-signup">
        <form>
          <h2>Cadastre-se</h2>

          <div className="container-inputs">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" />
          </div>

          <div className="container-inputs">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className="container-inputs">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
          </div>

          <div className="container-inputs">
            <label htmlFor="confirm-password">Confirme sua senha</label>
            <input type="password" name="confirm-password" />
          </div>

          <button className="btn-purple btn-l">Cadastrar</button>
          <Link to="/">Já tem cadastro? Clique aqui</Link>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
