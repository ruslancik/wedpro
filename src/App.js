import React from 'react';
import './App.scss';
import Header from './components/hero/header.component'
import Collection from './components/collection/collection.component'
import Banner from './components/banner/banner.component'
import Product from './components/product/product.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <Collection/>
      <Banner />
      <Product />
      <Footer/>
    </div>
  );
}

export default App;
