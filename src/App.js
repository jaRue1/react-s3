import logo from "./logo.svg"
import "./App.css"
import UploadImageToS3 from "./components/UploadImageToS3"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UploadImageToS3 />
      </header>
    </div>
  )
}

export default App
