import logo from './logo.svg';
import './App.css';
import { Router,Routes,BrowserRouter, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Company from './Components/Company/Company';
import Student from './Components/Student/Student';
import Home from './Components/Home/Home';
import InsertStudent from './Components/Student/InsertStudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/admin' Component={Admin} />
        <Route path='/company' Component={Company} />
        <Route path='/student' Component={Student} />
        <Route path='/student/insertstudent' Component={InsertStudent} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
