import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Nav from './components/nav';
import { useState} from 'react'



function App() {
  const [tabovi,setTabovi] = useState([
    {
    id:1,
    put:'page1',
    ime:'Page1',
    },
    {
    id:2,
    put:'page2',
    ime:'Page2',
    },
    {
    id:3,
    put:'page3',
    ime:'Page3',
    },
    {
    id:4,
    put:'page4',
    ime:'Page4',
    },
    {
    id:5,
    put:'page5',
    ime:'Page5',
    },
    {
    id:6,
    put:'page6',
    ime:'Page6',
    }
    ])
    
  return (
   <div className="App">
    <Router>
<div>
      <Routes>
     
      <Route 
     path='/' 
     element={
    <div className="App">
       <Nav tabovi={tabovi}/>
    <h1>Ovo je Home page</h1>
     
    </div>
      }
     
      />
      <Route path='/page1' element={<Page1 />} />
      <Route path='/page2' element={<Page2 />} />
      <Route path='/page3' element={<Page3 />} />
      <Route path='/page4' element={<Page4 />} />
      <Route path='/page5' element={<Page5 />} />
      <Route path='/page6' element={<Page6 />} />
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
