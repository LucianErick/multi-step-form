import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "../../components/Select";

import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";

import * as C from "./styles";

export const SecondStep = () => {
  const { state, dispatch } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (state.name === "") {
      navigate(-1);
    }

    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    state.name ? navigate("/step-3") : alert("Preencha todos os dados.");
  };

  const handlePreviousStep = () => {
    navigate(-1);
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  const firstName = state.name.split(" ")[0];

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>O que melhor descreve você, {firstName}?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado profissional atual.
        </p>
        <hr />

        <Select
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon=":D"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <Select
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon=":)"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <button className="previousButton" onClick={handlePreviousStep}>Anterior</button>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
