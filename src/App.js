import React from "react"
import { Route, Switch } from "react-router-dom"

import Layout from "./hoc/layout/Layout"
import BurgerBuilder from "./containers/burgerbuilder/BurgerBuilder"
import Checkout from "./containers/Checkout/Checkout"
import Orders from "./containers/Orders/Orders"

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
