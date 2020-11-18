import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { MyButton } from './Button';
import { Link } from 'react-router-dom';

import { GlobalContextComentarios, GlobalContextDescoberta } from './../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const NotesList = () => {
  const classes = useStyles();

  const { descobertas, removerDescoberta } = useContext(GlobalContextDescoberta);
  const { comentarios, removerComentario } = useContext(GlobalContextComentarios);

  return (
    <>
      <List className={classes.root}>
        <h1>Descobertas</h1>
        {descobertas.map(descoberta => (
          <ListItem>
            <ListItemText primary={descoberta.descoberta}/>
            <ListItemText primary={descoberta.data} secondary={descoberta.time} />
            <ListItemText primary={descoberta.descricao}/>
            <React.Fragment>
              <Link to={`/edit/${descoberta.id}`}>
                <MyButton type="submit" color="blue">Edit</MyButton>
              </Link>            
              <MyButton onClick={() => removerDescoberta(descoberta.id)} color="red">Delete</MyButton>
            </React.Fragment>
          </ListItem>
        ))}
      </List>
      <List className={classes.root}>
        <h1>Comentários</h1>
        {comentarios.map(comentario => (
          <ListItem>
            <ListItemText primary={comentario.comentario}/>
            <ListItemText primary={comentario.descricao}/>
            <React.Fragment>
              <Link to={`/edit/${comentario.id}`}>
                <MyButton type="submit" color="blue">Edit</MyButton>
              </Link>
              <MyButton onClick={() => removerComentario(comentario.id)} color="red">Delete</MyButton>
            </React.Fragment>
          </ListItem>
        ))}
      </List>
    </>
  );
}