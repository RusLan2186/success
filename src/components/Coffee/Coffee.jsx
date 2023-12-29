import React, { memo, useEffect } from 'react';
import cl from './Coffee.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { coffeeFetching } from '../../redux/coffeeCreator';
import CoffeeItem from './CoffeeItem';
import { deleteCoffee, fetchCoffee } from '../../redux/slices/coffeeSlice';
import AddCoffee from './AddCoffee';
import Gallery from './Gallery';

const Coffee = memo(() => {
  const coffeeList = useSelector((store) => store.coffee.coffee);
  const fetchCoffeeStatus = useSelector((store) => store.coffee.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffee());
  }, []);

  const removeCoffee = (id) => {
    if (window.confirm('Do you really want to delete?')) {
      dispatch(deleteCoffee(id));
    }
  };

  return (
    <div className='coffee__container'>
      <div className={cl.title}>Coffee</div>
      {fetchCoffeeStatus === 'loading' && <h1>Loading.....</h1>}
      {fetchCoffeeStatus === 'error' && <h1>Error</h1>}
      <div>
        <Gallery />
      </div>

      <div>
        <AddCoffee />
      </div>
      {coffeeList && (
        <div className={cl.coffeeItems}>
          {coffeeList.map((coffee, i) => (
            <CoffeeItem key={coffee.id} coffee={coffee} number={i + 1} remove={removeCoffee} />
          ))}
        </div>
      )}
    </div>
  );
});

export default Coffee;
