import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { InputLabel, Input } from '@material-ui/core';
import { MyButton } from './../../components/Button';
import { GlobalContextComentarios } from './../../context/GlobalStateComentarios';

export const EditComentario = (props) => {
  
  const {comentarios, editarComentario} = useContext(GlobalContextComentarios);
  const [comentarioSelecionado, setComentarioSelecionado] = useState({
    id: '',
    assunto: '',
    descricao:''
  });

  const history = useHistory();  

  useEffect(() => {
    const comentarioId = props.match.params.id;
    const comentarioSelecionado = comentarios.find(comentario => comentario.id === comentarioId);
    setComentarioSelecionado(comentarioSelecionado)
  }, [props, comentarios]);

  const onSubmit = () => {
    editarComentario(comentarioSelecionado)
    history.push('/');
  }

  const onChange = (e) => {
    setComentarioSelecionado({...comentarioSelecionado, [e.target.name]: e.target.value})
  }

  return(
    <>
     <form onSubmit={onSubmit}>
        <InputLabel htmlFor="assunto">Assunto</InputLabel>
        <Input 
          id="assunto"
          name="assunto"
          value={comentarioSelecionado.assunto}
          onChange={onChange}
        />
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input 
          id="descricao"
          name="descricao"
          value={comentarioSelecionado.descricao}
          onChange={onChange}
        />
        <MyButton type="submit" color="blue">Salvar</MyButton>
        <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
      </form>
    </>
  )
}