import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';




const App = () => {
  return (
    
    <div>
      
    <Router>
        <Route path="/" element={<Home/>} />
    </Router>
    </div>
  );
}

export default App;
