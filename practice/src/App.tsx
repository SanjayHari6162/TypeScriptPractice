import './App.css';
import { Props } from './Props';

function App() {
  const nameList =[
    {firstName:'Hari',
      lastName:'Sanjay'
     },
     {firstName:'Prasanth',
      lastName:'Rajan'
     },
     {firstName:'Nall Hari Hara',
      lastName:'Suthan'
     },
     {firstName:'Sathees',
      lastName:'Balan'
     }
  ]
  return (
    <div className="App">
      
        < Props name="Harisanjay" nameList={nameList} status="Offline" />
    </div>
  );
}

export default App;
