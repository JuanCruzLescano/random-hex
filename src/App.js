import React, {useState} from 'react';
import './App.css';
import ButtonHex from './Button'
import { Header } from 'semantic-ui-react'

function App() {

const [hex, setHex] = useState('');

function handleChange (hexValue) {
  setHex(hexValue)
  console.log('HexState: ', hex)
}

  return (
    <div className="App" style={{backgroundColor: `#${hex}`}}>
      <h2 className='hexTitle'>{'RANDOM HEX'}</h2>
      <ButtonHex handleChange={handleChange} />
      <Header size='large'>{`#${hex}`}</Header> 
    </div>
  );
}

export default App;
