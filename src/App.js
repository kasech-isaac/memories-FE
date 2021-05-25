import React from 'react'
import {Container} from '@material-ui/core';
import Navebar from './components/Navebar/Navebar'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

const App = () => {
    return (
    <BrowserRouter>
        <Container maxWidth="lg">
            <Navebar/>
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auth" exact component={Auth}/>
            </Switch>
        </Container>
    </BrowserRouter>
            
    )
}

export default App
