import React from 'react';
import { Link } from 'react-router-dom';
import { FormControl, InputLabel, Input, FormHelperText, Select} from '@material-ui/core';
import { MyButton } from './Button';

export const AddNote = () => {
  return(
    <>
      <Select fullWidth>
        <option value="descobertas">Descobertas</option>
        <option value="comentarios">Comentários</option>
      </Select>
      <FormControl fullWidth>
        <InputLabel htmlFor="my-input">Descoberta</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>

      <React.Fragment>
        <MyButton type="submit" color="blue">Salvar</MyButton>
        <Link to="/"><MyButton color="red">Cancelar</MyButton></Link>
      </React.Fragment>
    </>
  )
}