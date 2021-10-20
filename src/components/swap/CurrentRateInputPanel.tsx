import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'
import { Input as NumericalInput } from '../NumericalInput'

const InputRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`

const LabelRow = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  color: ${({ theme }) => theme.text1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: ${({ theme }) => darken(0.2, theme.text2)};
  }
`

const InputPanel = styled.div<{ hideInput?: boolean }>`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  background-color: ${({ theme }) => theme.bg2};
  z-index: 1;
`

const Container = styled.div<{ hideInput: boolean }>`
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

export const StyledTokenName = styled.span<{ active?: boolean }>`
  ${({ active }) => (active ? '  margin: 0 0.25rem 0 0.75rem;' : '  margin: 0 0.25rem 0 0.25rem;')}
  font-size:  ${({ active }) => (active ? '20px' : '16px')};

`

interface CurrentRateInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onGetCurrentRate?: () => void
}

export default function CurrentRateInputPanel({ value, onUserInput, onGetCurrentRate }: CurrentRateInputPanelProps) {
  return (
    <InputPanel>
      <Container hideInput={false}>
        <LabelRow>
          <RowBetween>
            <TYPE.body fontWeight={500} fontSize={14}>
              Rate
            </TYPE.body>
            <TYPE.body
              onClick={onGetCurrentRate}
              //   color={theme.text2}
              fontWeight={500}
              fontSize={14}
              style={{ display: 'inline', cursor: 'pointer' }}
            >
              Current
            </TYPE.body>
          </RowBetween>
        </LabelRow>
        <InputRow selected={true}>
          <>
            <NumericalInput
              className="token-amount-input"
              value={value}
              onUserInput={val => {
                onUserInput(val)
              }}
            />
            {/* {account && currency && showMaxButton && label !== t('currencyInputPanel.to') && (
                <StyledBalanceMax onClick={onMax}>{t('currencyInputPanel.max')}</StyledBalanceMax>
              )} */}
          </>
        </InputRow>
      </Container>
    </InputPanel>
  )
}
