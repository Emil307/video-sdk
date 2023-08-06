import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import JoinCall from './pages/JoinCall';
import Id from './id';

const App = () => {
  return (
    // <BrowserRouter>
    //     <Routes>
    //         <Route path='/joincall' element={<JoinCall/>}/>
    //     </Routes>
    // </BrowserRouter>
    <>
      <Id></Id>
    </>
  )
}

export default App;
