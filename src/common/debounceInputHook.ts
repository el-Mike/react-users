import { useState } from 'react';

import  AwesomeDebouncePromise from 'awesome-debounce-promise';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';

export const useDebounceInput = (cb: (...args: any[]) => any, dueTime: number = 300) => {
  const [inputText, setInputText] = useState('');

  const debounced = useConstant(() => AwesomeDebouncePromise(cb, dueTime));
  const search = useAsync(debounced, [inputText]);

  return {
    inputText,
    setInputText,
    search,
  }
};
