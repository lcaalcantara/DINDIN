import "./style.css";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getItem, setItem } from "../../utils/storage"

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = getItem('token');
    if (token) {
      navigate('/main');
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        return;
      }

      const response = await api.post('/login', {
        email: email,
        senha: password
      });

      const { usuario, token } = response.data;

      setItem('token', token);
      setItem('userId', usuario.id);
      setItem('userName', usuario.nome);

      navigate("/main");

    } catch (error) {
      console.log(error.response.status, error.response.data.mensagem);
    }

  }

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
            className="btn-purple btn-l"
            onClick={() => navigate("sign-up")}
          >
            Cadastre-se
          </button>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="container-inputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="container-inputs">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn-purple btn-l">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
