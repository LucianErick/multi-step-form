import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

import * as C from "./styles";

export const FirstStep = () => {
  const { state, dispatch } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    state.name ? navigate("/step-2") : alert("Preencha todos os dados.");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />

        <label htmlFor="name">
          Seu nome completo
          <input
            type="text"
            id="name"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
