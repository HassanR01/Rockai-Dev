import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Cursor from './components/cursor'
import './models/Effcts.js';
import Projects from './pages/projects';
import AddOrder from './pages/addOrder';
import Contact from './pages/contact';
import Login from "./pages/login";

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/addOrder' element={<AddOrder />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<><h1 style={{
          position : 'absolute' ,
          top : '50%' , 
          
        }}>No there any Somthing here</h1></>} />
      </Routes>
    </Router>

    <Cursor />
    <Footer />
    </>
  );
}

export default App;
