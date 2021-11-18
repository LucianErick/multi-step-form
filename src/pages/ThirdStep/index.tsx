import { stat } from "fs";
import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

import * as C from "./styles";

export const ThirdStep = () => {
  const { state, dispatch } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      console.log(state);
    } else {
      alert("Preencha todos os dados.");
    }
  };

  const handlePreviousStep = () => {
    navigate(-1);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal, {state.name.split(" ")[0]}. Onde te achamos?</h1>
        <p>Preencha seus dados para conseguirmos entrar em contato :)</p>
        <hr />

        <label htmlFor="email">
          Seu email
          <input
            type="email"
            id="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label htmlFor="github">
          Seu github
          <input
            type="url"
            id="github"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <button className="previousButton" onClick={handlePreviousStep}>
          Anterior
        </button>
        <button onClick={handleNextStep}>Concluir</button>
      </C.Container>
    </Theme>
  );
};
