import React from 'react';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import {decorate, observable, action, computed} from 'mobx';
import Store from './Store';


// decorate(Store, {
//     reviewList: observable,
//     addReview: action,
//     averageScore: computed,
//     reviewCount: computed
// });
const reviewStore = new Store();
function App() {
  return (
      <div className="container">
          <Form store={reviewStore}/>
          <Dashboard store={reviewStore}/>
      </div>
  );
}

export default App;
