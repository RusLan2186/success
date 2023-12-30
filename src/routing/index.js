import Coffee from '../components/Coffee/Coffee';
import Start from '../components/Start/Start';
import Test from '../components/Test/Test';
import Todo from '../components/Todo/Todo';

export const privateRoutes = [
  { path: '/', element: Start, expect: true },
  { path: '/test', element: Test, expect: true },
  { path: '/coffee', element: Coffee, expect: true },
  { path: '/todo', element: Todo, expect: true },
];

export const publicRoutes = [{ path: '/', element: Start, expect: true }];
