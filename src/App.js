import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import CheckOut from './Pages/CheckOut/CheckOut';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import { ToastContainer } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import UserProfile from './Pages/UserDetails/UserProfile';
import AdminProfile from './Pages/UserDetails/AdminProfile';

function App() {

  // aos initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return (
    <div className="App">
      <Toaster />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <CheckOut></CheckOut>
          </RequiredAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/userProfile' element={<UserProfile />}></Route>
        <Route path='/adminProfile' element={<AdminProfile />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      {/* <ToastContainer
        position="top-left"
        autoClose={1000}
      /> */}
    </div>
  );
}

export default App;
