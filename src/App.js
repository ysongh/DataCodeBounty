import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { OceanProvider } from '@oceanprotocol/react'
import { ConfigHelper, Logger } from '@oceanprotocol/lib'

import './App.css'
import Main from './pages/Main'

const configRinkeby = new ConfigHelper().getConfig('rinkeby')
const providerOptions = {}

export const web3ModalOpts = {
  cacheProvider: true,
  providerOptions
}

function App() {
  console.log(configRinkeby)
  const init = async () => {}

  useEffect(() => {
    init()
  }, [])

  const [did, setDid] = useState();

  return (
    <OceanProvider initialConfig={configRinkeby} web3ModalOpts={web3ModalOpts}>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </OceanProvider>
  )
}

export default App