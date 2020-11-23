import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import api from './../services/api';
import { useHistory } from 'react-router-dom';


const initialStateComentarios = {
  comentarios: []
}

const GlobalContextComentarios = createContext(initialStateComentarios);


const GlobalProviderComentarios = ({children}) => {
  const history = useHistory();

  const [stateComentarios, dispatchComentarios] = useReducer(AppReducer, initialStateComentarios);

  const removerComentario = (id) => {
    dispatchComentarios({
      type: 'removerComentarios',
      payload: id
    })
  }

  async function adicionarComentario (comentario) {
    const response = await api.post('/api/comentarios', comentario);
    console.log(response);

    if(response.status===200){
      history.push('/home');
    }
    else{
      alert("Erro ao cadastrar um novo comentario")
    }
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