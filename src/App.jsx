import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'

function App() {
  const [textValue, setTextValue] = useState("")

  const pasteText = async () => {
    const text = await navigator.clipboard.readText();
    if (text)
      setTextValue(text);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textTransform: 'uppercase' }}>QR Code Generator</h2>
      <QRCode
        size={32}
        style={{ height: "auto", width: "300px" }}
        value={textValue}
      />
      <input className='input-qr-text' type="text" value={textValue} onChange={(e) => { setTextValue(e.target.value) }} />
      <button className='btn-paste-text' onClick={pasteText}>Paste Text from ClipBoard</button>
    </div>
  )
}

export default App
