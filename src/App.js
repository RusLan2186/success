import { useState } from 'react';
import './scss/App.scss';

import Header from './components/Header/Header';
import Test from './components/Test/Test';
import Coffee from './components/Coffee/Coffee';
const App = () => {
  const [isSorted, setIsSorted] = useState(false);
  return (
    <div onClick={() => setIsSorted(false)} className='wrapper'>
      <header>
        <Header />
      </header>
      <section className='coffee'>
        <Coffee />
      </section>
      <section>
        <Test isSorted={isSorted} changeIsSorted={setIsSorted} />
      </section>
    </div>
  );
};

export default App;
