// @ts-ignore
import ReactTerminal, { ReactThemes } from 'react-terminal-component'
import { emulatorState } from './emulatorState'

const Terminal = () => (
  <div>
    <ReactTerminal
      promptSymbol='➜'
      emulatorState={emulatorState}
      theme={{
        ...ReactThemes.dye,
        background: '#120548',
        promptSymbolColor: '#d000e8',
        commandColor: '#908dff',
        outputColor: '#908dff',
        height: '60vh',
      }}
    />
  </div>
)

export { Terminal }
