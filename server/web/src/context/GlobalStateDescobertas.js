import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import api from './../services/api';
import { useHistory } from 'react-router-dom';

const initialStateDescobertas = {
  descobertas: []

}

const GlobalContextDescoberta = createContext(initialStateDescobertas);


const GlobalProviderDescobertas = ({children}) => {
  const history = useHistory();

  const [stateDescobertas, dispatchDescobertas] = useReducer(AppReducer, initialStateDescobertas);

  const removerDescoberta = (id) => {
    dispatchDescobertas({
      type: 'removerDescobertas',
      payload: id
    })
  }

  async function adicionarDescoberta(descoberta){
    const response = await api.post('/api/descobertas', descoberta);
    console.log(response);
    if(response.status===200){
      history.push('/home')
    }
    else{
      alert("Erro ao cadastrar um novo comentario")
    }
  }

  const editarDescoberta = (descoberta) => {
    dispatchDescobertas({
      type: 'editarDescobertas',
      payload: descoberta
    })
  }

  return(
    <>
      <GlobalContextDescoberta.Provider
        value={{
          descobertas: stateDescobertas.descobertas,
          removerDescoberta,
          adicionarDescoberta,
          editarDescoberta
        }}
      >
        {children}
      </GlobalContextDescoberta.Provider>
  </>
  )
}

export {GlobalProviderDescobertas, GlobalContextDescoberta};