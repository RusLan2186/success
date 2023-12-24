import { useState } from 'react';

export function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => setValue(e.target.value);
  const clear = () => setValue('');

  return { bind: { value, onChange }, value, clear, onChange };
}
