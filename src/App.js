import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import SignUp from './Pages/SignUp/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import {Navbar, Footer} from './Components';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
