import React, { useEffect } from 'react';
import cl from './Coffee.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { coffeeFetching } from '../../redux/coffeeCreator';
import CoffeeItem from './CoffeeItem';
import { deleteCoffee } from '../../redux/slices/coffeeSlice';
import AddCoffee from './AddCoffee';

const Coffee = () => {
  const coffeeList = useSelector((store) => store.coffee.coffee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coffeeFetching());
  }, []);

  const removeCoffee = (id) => {
    if (window.confirm('Do you really want to delete?')) {
      dispatch(deleteCoffee(id));
    }
  };

  return (
    <div className='coffee__container'>
      <div className={cl.title}>Coffee</div>
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
};

export default Coffee;
