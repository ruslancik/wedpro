import React from 'react';
import './App.scss';
import Header from './components/header/header.component'
import Collection from './components/collection/collection.component'
import Banner from './components/banner/banner.component'
import Product from './components/product/product.component';
import Footer from './components/footer/footer.component';
import LatestDeals from './components/latest-deals/latest-deals.component';


function App() {
  return (
    <div className="App">
      <Header/>
      <Collection/>
      <Banner />
      <Product />
      <LatestDeals/>
      <Footer/>
    </div>
  );
}

export default App;
