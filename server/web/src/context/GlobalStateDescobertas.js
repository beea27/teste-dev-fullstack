import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialStateDescobertas = {
  descobertas: []

}

const GlobalContextDescoberta = createContext(initialStateDescobertas);


const GlobalProviderDescobertas = ({children}) => {
  const [stateDescobertas, dispatchDescobertas] = useReducer(AppReducer, initialStateDescobertas);

  const removerDescoberta = (id) => {
    dispatchDescobertas({
      type: 'removerDescobertas',
      payload: id
    })
  }

  const adicionarDescoberta = (descoberta) => {
    dispatchDescobertas({
      type: 'adicionarDescobertas',
      payload: descoberta
    })
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