import React from 'react'
import styled from 'styled-components'
import { SwapType } from '../../pages/Swap/type'

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const Tab = styled.div`
  background-color: #eee;
  padding: 16px 32px;
  cursor: pointer;
`

export interface SwapTabProps {
  type: SwapType
  setSwapType: (e: SwapType) => void
}

export default function SwapTab({ type, setSwapType }: SwapTabProps): JSX.Element {
  return (
    <TabContainer>
      <Tab
        onClick={() => setSwapType('market')}
        style={{ borderTopLeftRadius: '30px', color: type === 'market' ? '#000' : '#666' }}
      >
        Market
      </Tab>
      <Tab
        onClick={() => setSwapType('limit')}
        style={{ borderTopRightRadius: '30px', color: type === 'limit' ? '#000' : '#666' }}
      >
        Limit
      </Tab>
    </TabContainer>
  )
}
