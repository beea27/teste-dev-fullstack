import React, {useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputLabel, Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';
import {v4 as uuid} from 'uuid';

import './styles.css';

export const AddComentario = () => {   
  const [assunto, setAssunto] = useState('');
  const [descricao, setDescricao] = useState('');

  const { adicionarComentario } = useContext(GlobalContextComentarios);
  const history = useHistory();

  const onSubmit = () => {
    const newComentario = {
      id: uuid(),
      assunto,
      descricao
    }
    adicionarComentario(newComentario);
    history.push('/');
  }

  const onChangeAssunto = (e) => {
    setAssunto(e.target.value)
  }

  const onChangeDescricao = (e) => {
    setDescricao(e.target.value)
  }

  return(
    <>
    <form class="form_container" onSubmit={onSubmit}>
      <div class="form">
        <InputLabel htmlFor="assunto">Assunto</InputLabel>
        <Input 
          id="assunto" 
          value={assunto}
          onChange={onChangeAssunto}
        />
      </div>
      <div class="form">
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input 
          id="descricao" 
          value={descricao}
          onChange={onChangeDescricao}
        />
      </div>
      
      <MyButton type="submit" color="blue">Salvar</MyButton>
      <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
    </form>
    </>
  )
}