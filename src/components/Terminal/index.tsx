import ReactTerminal, { ReactThemes } from 'react-terminal-component'

import { emulatorState } from './emulatorState'
import './Terminal.css'

const Terminal = () => (
  <div className='terminal'>
    <ReactTerminal
      promptSymbol='➜'
      emulatorState={emulatorState}
      theme={{
        ...ReactThemes.dye,
        background: '#120548',
        fontFamily: 'monospace',
        fontSize: '1.1rem',
        promptSymbolColor: '#d000e8',
        commandColor: '#908dff',
        outputColor: '#908dff',
        height: '60vh',
      }}
    />
  </div>
)

export { Terminal }
