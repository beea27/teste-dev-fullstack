import React from 'react';
import { Heading } from './../../components/Heading';
import { Descobertas } from '../../components/Descobertas';
import { Comentarios } from '../../components/Comentarios';

export const Home = () => {

  return(
    <>
      <Heading/>
      <Descobertas/>
      <Comentarios/>
    </>
  )
}