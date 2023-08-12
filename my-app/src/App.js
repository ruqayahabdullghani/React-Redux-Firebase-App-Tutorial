import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashbored/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignInAuth from './components/auth/SignInAuth';
import SingUpAuth from './components/auth/SingUpAuth';
import CreatProject from './components/project/CreatProject';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <switch>
      <Routes>
        <Route exact path='/' Component={Dashboard}/>
        <Route path='/project/:id' Component={ProjectDetails}/>
        <Route path='/singin' Component={SignInAuth}/>
        <Route path='/singup' Component={SingUpAuth}/>
        <Route path='/creatProject' Component={CreatProject}/>




      </Routes>
    </switch>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
