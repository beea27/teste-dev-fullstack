import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { MyButton } from './../ButtonAdd';
import { Text } from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center"
  }
}));

export const Heading = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar variant="dense">
        <Link to="/adicionar-descoberta">
          <MyButton color="blue">
          <Text>Adicionar Descoberta</Text>
          </MyButton></Link>
        <Link to="/adicionar-comentario">
          <MyButton color="blue">
            <Text>Adicionar Comentário</Text>
          </MyButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}