import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/page2';
import Nav from './components/nav';
import { useState} from 'react'


function App() {
  const listapolja= ['o nama','kontakt' ]
  const [tabovi,setTabovi] = useState([
    {
    id:2,
    put:'page1',
    ime:'Page1',
    },
    {
    id:3,
    put:'page2',
    ime:'Page2',
    }
    ])
    
  return (
   <div className="App">
    <Router>
<div>
<Nav tabovi={tabovi}/>
      <Routes>
      
      <Route 
     path='/' 
     element={
    <div className="App">
    <h1>Ovo je Home page</h1>
     
    </div>
      }
     
      />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
