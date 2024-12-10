import React from 'react';
import './App.css';
import { Props } from './Props';
import { Event } from './Event';
import { Style } from './Style';
import { UseState } from './UseState';

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
      
        < Props name="Harisanjay" nameList={nameList} status="Offline" fetching='sucesses' />
        < Event />
        < Style css={{color:"#fff", backgroundColor:"red",height:"50px",width:"50px"}}/>
        < UseState />
    </div>
  );
}

export default App;
