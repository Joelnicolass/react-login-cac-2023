import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { singIn, singInWithGoogle } from "../services/signIn.service";
import { signUp } from "../services/signUp.service";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    //  loguin
    // const user = await singIn();

    //loguin con google
    //const user = await singInWithGoogle();

    // registro
    const user = await signUp();
    console.log(user);

    /* login({
      email: data.email.toString(),
    });

    navigate("/", {
      replace: true,
    }); */
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="email" name="email" required />
      </div>
      <div>
        <input type="password" name="password" required />
      </div>

      <div>
        <button type="submit">Iniciar Sesión</button>
      </div>
    </form>
  );
};

export default LoginForm;
