import logo from "./logo.svg"
import "./App.css"
import UploadImageToS3WithNativeSdk from "./components/UploadImageToS3WithNativeSdk"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadImageToS3WithNativeSdk />
      </header>
    </div>
  )
}

export default App
