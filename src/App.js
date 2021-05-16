import React, { useEffect, useState } from 'react'
import { OceanProvider } from '@oceanprotocol/react'
import { ConfigHelper, Logger } from '@oceanprotocol/lib'

import './App.css'
import { NetworkMonitor } from './components/NetworkMonitor'
import { Wallet } from './components/Wallet'
import { AllDdos } from './components/AllDdos'
import { Publish } from './components/Publish'
import { ConsumeDdo } from './components/ConsumeDdo'

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
      <div className="container">
        <NetworkMonitor />
        <div>
          <Wallet />
        </div>
        <div>
          <AllDdos />
        </div>
        <div>
          <Publish />
        </div>
        <div>
          <ConsumeDdo />
        </div>
      </div>
    </OceanProvider>
  )
}

export default App