import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/components/shared/Header/Header';
import './App.css';
import AddItem from './components/home/AddItem/AddItem';
import Blog from './components/home/Blog/Blog';
import Contact from './components/home/Contact/Contact';
import Home from './components/home/Home/Home';
import Inventories from './components/home/Inventories/Inventories';
import InventoryDetail from './components/home/InventoryDetail/InventoryDetail';
import Login from './components/home/Login/Login';
import SignUp from './components/home/SignUp/SignUp';
import Footer from './components/shared/Footer/Footer';
import NotFound from './components/shared/NotFound/NotFound';
import RequireAuth from '../src/components/home/RequireAuth/RequireAuth';
import MyItems from './components/home/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventories' element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/addItem' element={
        <RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
