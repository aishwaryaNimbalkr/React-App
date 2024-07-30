

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Beauty from './Components/Beauty';
import NavbarMain from './Components/NavbarMain';
import Bevarages from './Components/Bevarages';
import Games from './Components/Games';

function App() {
  
  
   return (

   
    <BrowserRouter>
     <>
     <NavbarMain/>
     <Routes>
      <Route path="/" element={<Beauty/>}/>
      <Route path="bevarage" element={<Bevarages/>}/>
      <Route path="games" element={<Games/>}/>
     </Routes>
     </>
    </BrowserRouter>
    
  );
}

export default App;
