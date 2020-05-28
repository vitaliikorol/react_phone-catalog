import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import { Navigation } from './Navigation/navigation';
import { HomePage } from './HomePage/homePage';
import { PhonesCatalog } from './PhonesCatalog/phonesCatalog';
// import { Favourites } from './Favourites/favourites';
import { Cart } from './Cart/cart';
import { Footer } from './Footer/footer';
import { Accessories } from './AccessoriesCatalog/accessories';
import { TabletsCatalog } from './TabletsCatalog/tabletsCatalog';
import { ItemSpecificationCard } from './MultipurposeComponents/ItemSpecificationCard/itemSpecificationCard';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/phones" component={PhonesCatalog} />
        <Route path="/tablets" component={TabletsCatalog} />
        <Route path="/accessories" component={Accessories} />
        <Route path="/favourites" component={ItemSpecificationCard} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
