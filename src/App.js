import React from 'react';
import './App.scss';
import Hero from './components/hero/hero.component'
import Collection from './components/collection/collection.component'
import Banner from './components/banner/banner.component'
import Product from './components/product/product.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Collection/>
      <Banner />
      <Product />
      <Footer/>
    </div>
  );
}

export default App;
