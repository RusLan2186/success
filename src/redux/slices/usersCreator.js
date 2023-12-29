// import { useDispatch } from 'react-redux';
// import { usersFetching, usersFetchingError, usersFetchingSuccess } from './usersSlice';
// import axios from 'axios';

// export const fetchUsers = () => async (dispatch) => {
//   try {
//     dispatch(usersFetching());
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     dispatch(usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(usersFetchingError(e.message));
//   }
// };
