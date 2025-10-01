import dynamic from 'next/dynamic'
import ReactTerminal from 'react-terminal-component'

import { emulatorState } from './emulatorState'

const Terminal = () => (
  <div className='terminal'>
    <ReactTerminal
      emulatorState={emulatorState}
      promptSymbol='❯'
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

export const DynamicTerminal = dynamic(() => Promise.resolve(Terminal), {
  ssr: false,
  loading: () => <></>,
}) as typeof Terminal
