import React from 'react';
import { Heading } from './../../components/Heading';
import { Descobertas } from '../../components/Descobertas';
import { Comentarios } from '../../components/Comentarios';
import {Title} from './styles';
import {getNomeUsuario} from './../../services/auth';

export const Home = () => {

  return(
    <>
      <Heading/>
      <Title>Olá, </Title>
      {getNomeUsuario()}
      <Descobertas/>
      <Comentarios/>
    </>
  )
}