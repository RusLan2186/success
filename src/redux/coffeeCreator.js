import axios from 'axios';
import { coffeeFetch, coffeeFetchError, coffeeFetchSuccess } from './slices/coffeeSlice';

export const coffeeFetching = () => async (dispatch) => {
  try {
    dispatch(coffeeFetch());
    const response = await axios.get('https://api.sampleapis.com/coffee/hot');
    dispatch(coffeeFetchSuccess(response.data));
  } catch (e) {
    dispatch(coffeeFetchError(e.message));
  }
};
