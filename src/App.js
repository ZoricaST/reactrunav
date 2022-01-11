import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lista from './components/Lista'
import Page1 from './pages/Page1';
import Page2 from './pages/page2';
import Nav from './components/nav';

function App() {
  const listapolja= ['o nama','kontakt' ]

  return (
   <div className="App">
    <Router>
<div>
<Nav />
      <Routes>
      
      <Route 
     path='/' 
     element={
    <div className="App">
     <Lista polja={listapolja}/>
     
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
