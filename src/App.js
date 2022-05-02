import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/shared/Header/Header';
import './App.css';
import Blog from './components/home/Blog/Blog';
import Client from './components/home/Client/Client';
import Contact from './components/home/Contact/Contact';
import Home from './components/home/Home/Home';
import Inventories from './components/home/Inventories/Inventories';
import Login from './components/home/Login/Login';
import SignUp from './components/home/SignUp/SignUp';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/client' element={<Client></Client>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
