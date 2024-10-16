
import '../styles/App.css';
import Navbar from './Navbar';
import Main from './Main';
import { useState } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }
  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />

    </div>
  );
}

export default App;
