import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialStateDescobertas = {
  descobertas: [
    {id: 1, descoberta: 'pirâmide', data: '27-03-2021', time: '16:00', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 2, descoberta: 'pirâmide', data: '27-03-2021', time: '22:00', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 3, descoberta: 'pirâmide', data: '27-03-2021', time: '05:00', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 4, descoberta: 'pirâmide', data: '27-03-2021', time: '19:00', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
  ]
}

const initialStateComentarios = {
  comentarios: [
    {id: 1, comentario: 'deserto', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 2, comentario: 'deserto', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 3, comentario: 'deserto', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
    {id: 4, comentario: 'deserto', descricao: 'sadhhasfhsgfbjhsdgfhgshdgfghsdfgdsfvgsdvfgdsvfgsdvfghsdvvfghsdgs'},
  ]
}

export const GlobalContextDescoberta = createContext(initialStateDescobertas);
export const GlobalContextComentarios = createContext(initialStateComentarios);


export const GlolbalProvider = ({children}) => {
  const [stateDescobertas, dispatchDescobertas] = useReducer(AppReducer, initialStateDescobertas);
  const [stateComentarios, dispatchComentarios] = useReducer(AppReducer, initialStateComentarios);

  const removerDescoberta = (id) => {
    dispatchDescobertas({
      type: 'removerDescoberta',
      payload: id
    })
  }

  const removerComentario = (id) => {
    dispatchComentarios({
      type: 'removerComentario',
      payload: id
    })
  }

  return(
    <>
      <GlobalContextDescoberta.Provider
        value={{
          descobertas: stateDescobertas.descobertas,
          removerDescoberta
        }}
      >
        {children}
      </GlobalContextDescoberta.Provider>

    <GlobalContextComentarios.Provider
    value={{
      comentarios: stateComentarios.comentarios,
      removerComentario
    }}
    >
    {children}
    </GlobalContextComentarios.Provider>
  </>
  )
}
