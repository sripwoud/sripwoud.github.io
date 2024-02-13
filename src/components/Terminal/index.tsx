// @ts-ignore
import ReactTerminal from 'react-terminal-component'
import dynamic from 'next/dynamic'

import { emulatorState } from './emulatorState'

const Terminal = () => (
  <div className='terminal'>
    <ReactTerminal
      promptSymbol='❯'
      emulatorState={emulatorState}
      theme={{
        background: '#120548',
        promptSymbolColor: '#d000e8',
        commandColor: '#908dff',
        outputColor: '#908dff',
        height: '60vh',
      }}
    />
  </div>
)

const DynamicTerminal = dynamic(() => Promise.resolve(Terminal), {
  ssr: false,
  loading: () => <></>,
}) as typeof Terminal

export { DynamicTerminal }
