import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/vievs/Header/Header';
import Footer from './components/vievs/Footer/Footer';
import Home from './components/pages/Home/Home';
import SingleProduct from './components/pages/SingleProduct/SingleProduct';
import BasketPage from './components/pages/BasketPage/BasketPage';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import NotFound from './components/pages/NotFound/NotFound';
import BasketContextProvider from './components/redux/BasketContext';


const App = () => {
  return (
    <BasketContextProvider>
    <div>
      <Container>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<SingleProduct />}/>
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </Container>
    </div>
    </BasketContextProvider>
  );
};

export default App;