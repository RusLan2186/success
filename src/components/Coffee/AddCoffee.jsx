import React, { useRef, useState } from 'react';
import cl from './Coffee.module.scss';
import { useDispatch } from 'react-redux';
import { addCoffee } from '../../redux/slices/coffeeSlice';

const AddCoffee = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [url, setUrl] = useState();
  const fileReader = new FileReader();
  const dispatch = useDispatch();
  const inputRef = useRef();

  fileReader.onloadend = () => {
    setUrl(fileReader.result);
  };
  const handleOnChange = (e) => {
    setImage(inputRef.current.files[0]);
    fileReader.readAsDataURL(inputRef.current.files[0]);
  };

  const handleAddCoffee = (title, image) => {
    dispatch(addCoffee({ id: Date.now(), title, image }));
    setTitle('');
  };

  return (
    <div className={cl.addForm}>
      <input
        className='input'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Add coffee'
      />
      <input
        ref={inputRef}
        id='formImage'
        accept='.jpg, .png, .gif'
        type='file'
        name='image'
        onChange={handleOnChange}
      />

      <button onClick={() => handleAddCoffee(title, url)} className='button'>
        Add
      </button>
    </div>
  );
};

export default AddCoffee;
