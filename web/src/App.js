import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from './components/Home';
import {EditNote} from './components/EditNote';
import {AddNote} from './components/AddNote';

import { GlolbalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlolbalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/add" component={AddNote}/>
            <Route path="/edit/:id" component={EditNote}/>
          </Switch>
        </BrowserRouter>
      </GlolbalProvider>
    </div>
  );
}

export default App;
