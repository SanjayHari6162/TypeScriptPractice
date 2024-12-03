import './App.css';
import { Props } from './Props';

function App() {
  const nameList =[
    {firstName:'Hari',
      lastName:'Sanjay'
     }
  ]
  return (
    <div className="App">
      
        < Props name="Harisanjay"  />
    </div>
  );
}

export default App;
