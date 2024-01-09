import './App.css';
import { useState } from 'react';
import Lists from './Components/Lists';

function App() {
  const [listType, setType] = useState(true);
  const [listOrientation, setOrientation] = useState(true);
  const [listData, setData] = useState(
    ["Andrews", "Ren", "Ethan", "Georgie", "Johnathan", "Jacob", "Matthews", "Noah", "Asher", "Kyle"]
  );
  const handleType = () => setType((prev) => !prev);
  const handleOri = () => setOrientation((prev) => !prev);
  const buttonStyles = {
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease', 
        outline: 'none',
        ':hover': {backgroundColor: '#0056b3'}
    };
  return (
    <div className="App">
      <header className="App-header">
        <button style={buttonStyles} onClick={() => handleType()}>Change type!</button>
        <br />
        <button style={buttonStyles} onClick={() => handleOri()}>Change orientation!</button>
        <Lists type={listType} data={listData} orientation={listOrientation}/>
      </header>
    </div>
  );
}

export default App;
