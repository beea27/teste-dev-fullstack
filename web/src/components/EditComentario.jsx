import React, {useState, useContext, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import { MyButton } from './Button';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContextComentarios } from '../context/GlobalStateComentarios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const EditComentario = (props) => {
  const classes = useStyles();
  
  const {comentarios, editarComentario} = useContext(GlobalContextComentarios);
  const [comentarioSelecionado, setComentarioSelecionado] = useState({
    id: '',
    assunto: '',
    descricao:''
  });

  const history = useHistory();
  const currentComentarioId = props.match.params.id;
  console.log(comentarioSelecionado)

  useEffect(() => {
    const comentarioId = currentComentarioId;
    console.log(typeof comentarioId)
    const comentarioSelecionado = comentarios.find(comentario => comentario.id === comentarioId);
    setComentarioSelecionado(comentarioSelecionado)
    console.log(comentarioSelecionado)
  }, [currentComentarioId, comentarios])

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
      <FormControl>
        <InputLabel htmlFor="assunto">Assunto</InputLabel>
        <Input 
          id="assunto"
          name="assunto"
          value={comentarioSelecionado.assunto}
          onChange={onChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="descricao">Descrição</InputLabel>
        <Input 
          id="descricao"
          name="descricao"
          value={comentarioSelecionado.descricao}
          onChange={onChange}
        />
      </FormControl>
        <React.Fragment>
          <MyButton type="submit" color="blue">Salvar</MyButton>
          <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
        </React.Fragment>
      </form>
    </>
  )
}