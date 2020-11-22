import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialStateComentarios = {
  comentarios: []
}

const GlobalContextComentarios = createContext(initialStateComentarios);


const GlobalProviderComentarios = ({children}) => {
  const [stateComentarios, dispatchComentarios] = useReducer(AppReducer, initialStateComentarios);

  const removerComentario = (id) => {
    dispatchComentarios({
      type: 'removerComentarios',
      payload: id
    })
  }

  const adicionarComentario = (comentario) => {
    dispatchComentarios({
      type: 'adicionarComentarios',
      payload: comentario
    })
  }

  const editarComentario = (comentario) => {
    dispatchComentarios({
      type: 'editarComentarios',
      payload: comentario
    })
  }

  return(
    <>
      <GlobalContextComentarios.Provider
        value={{
          comentarios: stateComentarios.comentarios,
          removerComentario,
          adicionarComentario,
          editarComentario
        }}
        >
        {children}
      </GlobalContextComentarios.Provider>
    </>
  )
}

export {GlobalContextComentarios, GlobalProviderComentarios}