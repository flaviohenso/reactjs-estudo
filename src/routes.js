import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'

const Routes = () => (
    /** define que agente esta utilizando as rotas atraves de um browser **/
    <BrowserRouter>
        {/* ele permiti que apenas um unica rota seja usada ao mesmo tempo */}
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
)

export default Routes