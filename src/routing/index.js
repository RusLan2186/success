import Coffee from '../components/Coffee/Coffee';
import Start from '../components/Start/Start';
import Test from '../components/Test/Test';

export const routesItems = [
  { path: '/test', element: Test, expect: true },
  { path: '/coffee', element: Coffee, expect: true },
  { path: '/', element: Start, expect: true },
];
