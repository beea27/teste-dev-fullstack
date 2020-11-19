import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from './components/Home';
import { EditDescoberta } from './components/EditDescoberta';
import { EditComentario } from './components/EditComentario';
import { AddComentario } from './components/AddComentario';
import { AddDescoberta } from './components/AddDescoberta';


import { GlobalProviderComentarios } from './context/GlobalStateComentarios';
import { GlobalProviderDescobertas } from './context/GlobalStateDescobertas';


function App() {
  return (
    <div className="App">
      <GlobalProviderDescobertas>
        <GlobalProviderComentarios>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/adicionar-comentario" component={AddComentario}/>
              <Route path="/adicionar-descoberta" component={AddDescoberta}/>
              <Route path="/editar-descoberta/:id" component={EditDescoberta}/>
              <Route path="/editar-comentario/:id" component={EditComentario}/>
            </Switch>
          </BrowserRouter>
          </GlobalProviderComentarios>
      </GlobalProviderDescobertas>
    </div>
  );
}

export default App;
