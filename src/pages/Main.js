import React from 'react'

import { NetworkMonitor } from '../components/NetworkMonitor'
import { Wallet } from '../components/Wallet'
import { AllDdos } from '../components/AllDdos'
import { Publish } from '../components/Publish'
import { ConsumeDdo } from '../components/ConsumeDdo'

function Main() {
  return (
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
  )
}

export default Main
